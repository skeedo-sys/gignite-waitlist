import React from 'react';

export interface ContentSection {
  id: string;
  icon: string;
  title: string;
  content: React.ReactNode;
}

export type LegalDocumentType = 'home' | 'tos' | 'privacy' | 'cookies' | 'aup';
