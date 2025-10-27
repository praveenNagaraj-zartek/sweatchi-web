/**
 * Utility function to handle mail app redirection with fallbacks
 * Works across different devices and browsers
 */

interface MailRedirectOptions {
  email: string;
  subject?: string;
  body?: string;
  fallbackUrl?: string;
}

export const redirectToMailApp = (options: MailRedirectOptions) => {
  const { email, subject = '', body = '', fallbackUrl } = options;

  // Create mailto URL with proper encoding
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Try multiple approaches for better compatibility
  const attemptMailRedirect = () => {
    try {
      // Method 1: Direct window.location.href (most reliable)
      window.location.href = mailtoUrl;
      return true;
    } catch (error) {
      console.warn('Method 1 failed:', error);

      try {
        // Method 2: Create temporary link and click it
        const tempLink = document.createElement('a');
        tempLink.href = mailtoUrl;
        tempLink.style.display = 'none';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        return true;
      } catch (error) {
        console.warn('Method 2 failed:', error);

        try {
          // Method 3: Use window.open as fallback
          window.open(mailtoUrl, '_self');
          return true;
        } catch (error) {
          console.warn('Method 3 failed:', error);
          return false;
        }
      }
    }
  };

  // Check if we're on iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Check if we're on Android
  const isAndroid = /Android/.test(navigator.userAgent);

  // For iOS devices, try to detect if mail app is available
  if (isIOS) {
    // iOS specific handling
    const success = attemptMailRedirect();
    if (!success && fallbackUrl) {
      // Show fallback option
      showFallbackDialog(email, fallbackUrl);
    }
    return;
  }

  // For Android devices
  if (isAndroid) {
    const success = attemptMailRedirect();
    if (!success && fallbackUrl) {
      showFallbackDialog(email, fallbackUrl);
    }
    return;
  }

  // For desktop browsers
  const success = attemptMailRedirect();
  if (!success && fallbackUrl) {
    showFallbackDialog(email, fallbackUrl);
  }
};

const showFallbackDialog = (email: string, fallbackUrl?: string) => {
  const message = `Unable to open your mail app automatically. Please copy this email address: ${email}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    // Modern browsers with clipboard API
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert(`${message}\n\nEmail address has been copied to your clipboard!`);
      })
      .catch(() => {
        alert(message);
      });
  } else {
    // Fallback for older browsers
    alert(message);
  }

  // If there's a fallback URL (like a contact form), offer it as an option
  if (fallbackUrl) {
    const useFallback = confirm(
      'Would you like to use our contact form instead?'
    );
    if (useFallback) {
      window.open(fallbackUrl, '_blank');
    }
  }
};

// Convenience function for common use cases
export const createMailLink = (
  email: string,
  subject: string = 'General Inquiry',
  body: string = 'Hello Sweatchi Team,\n\n'
) => {
  return {
    href: `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`,
    onClick: (e: React.MouseEvent) => {
      e.preventDefault();
      redirectToMailApp({
        email,
        subject,
        body,
        fallbackUrl: '/contact',
      });
    },
  };
};
