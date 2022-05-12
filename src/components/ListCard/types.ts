import React from 'react';

interface IListCardItem {
    content: React.ReactNode;
    icon: React.ReactNode;
}

export interface Props {
    title?: string;
    items: IListCardItem[];
}