const BASE_URL = 'https://api.sweatchi.com/api/v1';

export interface PageContent {
  id: number;
  key: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export async function fetchPageContent(
  pageKey: 'privacy' | 'terms'
): Promise<PageContent | null> {
  try {
    const response = await fetch(`${BASE_URL}/content/pages/${pageKey}/`);

    if (!response.ok) {
      console.error(`Failed to fetch ${pageKey} page:`, response.statusText);
      return null;
    }

    const data: PageContent = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${pageKey} page:`, error);
    return null;
  }
}
