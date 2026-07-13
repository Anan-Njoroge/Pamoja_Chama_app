import React from 'react';

export interface ComponentSectionProps {

  /**
   * Section title.
   */
  title: string;

  /**
   * Optional description.
   */
  description?: string;

  /**
   * Components to showcase.
   */
  children: React.ReactNode;

}