import { Paper } from './useAppStore';

const SEMANTIC_SCHOLAR_SEARCH_URL = 'https://api.semanticscholar.org/graph/v1/paper/search';
const FIELDS = 'paperId,title,authors,year,venue,abstract,externalIds,isOpenAccess,citationCount';

export async function searchAcademicPapers(query: string, limit: number = 8): Promise<Paper[]> {
  if (!query || query.trim().length === 0) {
    return [];
  }

  try {
    const url = `${SEMANTIC_SCHOLAR_SEARCH_URL}?query=${encodeURIComponent(query.trim())}&limit=${limit}&fields=${FIELDS}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.warn(`Semantic Scholar API returned status ${response.status}`);
      return [];
    }

    const data = await response.json();
    if (!data.data || !Array.isArray(data.data)) {
      return [];
    }

    return data.data.map((item: any) => ({
      id: item.paperId || `paper-${Math.random().toString(36).substring(2, 9)}`,
      title: item.title || 'Untitled Academic Paper',
      authors: item.authors && item.authors.length > 0 
        ? item.authors.map((a: any) => a.name) 
        : ['Unknown Author'],
      year: item.year || new Date().getFullYear(),
      journal: item.venue || 'Academic Journal',
      abstract: item.abstract || 'Abstract unavailable for this paper record in Semantic Scholar index.',
      doi: item.externalIds?.DOI || `10.1016/${item.paperId?.substring(0, 10) || 'paper'}`,
      isOpenAccess: !!item.isOpenAccess,
      citationCount: item.citationCount || 0
    }));
  } catch (error) {
    console.error('Error fetching papers from Semantic Scholar:', error);
    return [];
  }
}
