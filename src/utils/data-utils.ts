import { type CollectionEntry } from 'astro:content';

type ContentEntry = CollectionEntry<'pubs'>;

export function sortItemsByDateDesc(itemA: ContentEntry, itemB: ContentEntry) {
    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}
