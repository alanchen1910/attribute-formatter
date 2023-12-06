import { Attribute, Metadata } from "./types";
const Filter = require('bad-words')

export interface ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[];
}

export class SingleDigitParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const regex = /^[0-9]{1}$/;

    if (regex.test(nftName)) {
      attributes.push({
        trait_type: "IsSingleDigit",
        value: "True",
      });
    }

    return attributes;
  }
}

export class DoubleDigitParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const regex = /^[0-9]{2}$/;

    if (regex.test(nftName)) {
      attributes.push({
        trait_type: "IsDoubleDigit",
        value: "True",
      });
    }

    return attributes;
  }
}

export class ZeroExDoubleDigitParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const regex = /^0x[0-9]{2}$/;

    if (regex.test(nftName)) {
      attributes.push({
        trait_type: "IsZeroExDoubleDigit",
        value: "True",
      });
    }

    return attributes;
  }
}

export class NineNineNineParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const regex = /^[0-9]{3}$/;

    if (regex.test(nftName)) {
      attributes.push({
        trait_type: "999 Club",
        value: "True",
      });
    }
    return attributes;
  }
}

export class TenKParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const regex = /^[0-9]{4}$/;
    
    if (regex.test(nftName)) {
      attributes.push({
        trait_type: "10k Club",
        value: "True",
      });
    }

    return attributes;
  }
}

export class HundredKParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const regex = /^[0-9]{5}$/;

    if (regex.test(nftName)) {
      attributes.push({
        trait_type: "100k Club",
        value: "True",
      });
    }

    return attributes;
  }
}

export class ThreeLetterParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const regex = /^[a-zA-Z]{3}$/;

    if (regex.test(nftName)) {
      attributes.push({
        trait_type: "3 Letter Name",
        value: "True",
      });
    }

    return attributes;
  }
}

export class FourLetterParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const regex = /^[a-zA-Z]{4}$/;

    if (regex.test(nftName)) {
      attributes.push({
        trait_type: "4 Letter Name",
        value: "True",
      });
    }

    return attributes;
  }
}

export class FiveLetterParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const regex = /^[a-zA-Z]{5}$/;

    if (regex.test(nftName)) {
      attributes.push({
        trait_type: "5 Letter Name",
        value: "True",
      });
    }

    return attributes;
  }
}

export class DigitsOnlyParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const regex = /^[0-9]+$/;

    if (regex.test(nftName)) {
      attributes.push({
        trait_type: "Digits Only",
        value: "True",
      });
    }

    return attributes;
  }
}

export class EmojisOnlyParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const emojiRegex =
      /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
    const nftName = nameOverride || metadata.name;

    if (emojiRegex.test(nftName)) {
      attributes.push({
        trait_type: "Emojis Only",
        value: "True",
      });
    }

    return attributes;
  }
}

export class SingleEmojiParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const emojiRegex =
      /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]){1}$/g;
    const nftName = nameOverride || metadata.name;

    if (emojiRegex.test(nftName)) {
      attributes.push({
        trait_type: "Single Emoji",
        value: "True",
      });
    }

    return attributes;
  }
}

export class NSFWParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const filter = new Filter();

    if (filter.isProfane(nftName)) {
      attributes.push({
        trait_type: "NSFW",
        value: "True",
      });
    }

    return attributes;
  }
}

export class PalindromeParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;

    if (nftName === nftName.split("").reverse().join("")) {
      attributes.push({
        trait_type: "Palindrome",
        value: "True",
      });
    }

    return attributes;
  }
}

export class LettersOnlyParser implements ITraitParser {
  parse(metadata: Metadata, nameOverride?: string): Attribute[] {
    const attributes = metadata.attributes;
    const nftName = nameOverride || metadata.name;
    const regex = /^[a-zA-Z]+$/;

    if (regex.test(nftName)) {
      attributes.push({
        trait_type: "Letters Only",
        value: "True",
      });
    }

    return attributes;
  }
}