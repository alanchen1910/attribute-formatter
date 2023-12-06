import {
  DigitsOnlyParser,
  DoubleDigitParser,
  EmojisOnlyParser,
  FiveLetterParser,
  FourLetterParser,
  HundredKParser,
  ITraitParser,
  LettersOnlyParser,
  NSFWParser,
  NineNineNineParser,
  PalindromeParser,
  SingleDigitParser,
  SingleEmojiParser,
  TenKParser,
  ThreeLetterParser,
  ZeroExDoubleDigitParser,
} from "./TraitParsers";

export const DOMAIN_NAME_PARSERS: ITraitParser[] = [
  new SingleDigitParser(),
  new DoubleDigitParser(),
  new ZeroExDoubleDigitParser(),
  new NineNineNineParser(),
  new TenKParser(),
  new HundredKParser(),
  new ThreeLetterParser(),
  new FourLetterParser(),
  new FiveLetterParser(),
  new DigitsOnlyParser(),
  new EmojisOnlyParser(),
  new SingleEmojiParser(),
  new NSFWParser(),
  new PalindromeParser(),
  new LettersOnlyParser(),
];

// These should be internal project ids if thats what you use but it's interchangeable
export const DOMAIN_NAME_COLLECTIONS_PARSERS = new Map<string, ITraitParser[]>([
  ["E5ZnBpH9DYcxRkumKdS4ayJ3Ftb6o3E8wSbXw4N92GWg", DOMAIN_NAME_PARSERS],
  ["86deDknZeDhko46gB8SqK7rYc5HnSBjKDvo6Mi7viYS9", DOMAIN_NAME_PARSERS],
  ["6bsj8ybPa9xsc6pcAme4x6LvhKvtCmgA4TwwG4qtFw5Z", DOMAIN_NAME_PARSERS],
  ["GYLiNNu4pqL6QvZKYHW2EMoibVFm2aVJsPHpUVLcU6pL", DOMAIN_NAME_PARSERS],
  ["7yQYe84W7a5VgNvtRzsvy7mPRed5gmL9HnvJfsbPWK9J", DOMAIN_NAME_PARSERS]
]);
