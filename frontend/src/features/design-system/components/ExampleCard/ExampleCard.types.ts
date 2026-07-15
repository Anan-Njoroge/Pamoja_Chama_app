import React from 'react';

export interface ExampleCardProps {

  /**
   * Example title.
   */
  title?: string;

  /**
   * Optional explanation.
   */
  description?: string;

  /**
   * Example preview.
   */
  children?: React.ReactNode;

}