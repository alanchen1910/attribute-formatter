export type Attribute = {
  trait_type: string;
  value: string;
}

export type Metadata = {
  name: string;
  symbol: string;
  description: string;
  image: string;
  animation_url: string;
  external_url: string;
  attributes: Attribute[];
  properties: [
    {
      files: [
        {
          uri: string;
          type: string;
          cdn?: boolean;
        }
      ],
      category: string;
    }
  ]
}