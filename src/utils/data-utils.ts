import { type CollectionEntry } from 'astro:content';

type ContentEntry = CollectionEntry<'pubs'>;

export function sortItemsByDateDesc(itemA: ContentEntry, itemB: ContentEntry) {
    const priorityA = itemA.data.priority ?? Number.POSITIVE_INFINITY;
    const priorityB = itemB.data.priority ?? Number.POSITIVE_INFINITY;

    if (priorityA !== priorityB) return priorityA - priorityB;

    return new Date(itemB.data.publishDate).getTime() - new Date(itemA.data.publishDate).getTime();
}
