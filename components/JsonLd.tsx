import React from 'react';

type JsonLdProps<T extends Record<string, unknown>> = {
  data: T;
};

export default function JsonLd<T extends Record<string, unknown>>({ data }: JsonLdProps<T>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
