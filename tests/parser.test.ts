import { expect } from "chai";
import { DOMAIN_NAME_COLLECTIONS_PARSERS } from "../src/parser/CustomAttributeCollections";
import { AttributeParser } from "../src/parser/AttributeParser";

describe("Attribute Parser Unit Tests", () => {
  describe("Keeps Existing Attributes", () => {
    it("Should preserve existing attributes", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "1",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [{
            trait_type: "hello",
            value: "world"
          }],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(4);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "hello" &&
              attribute.value == "world"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "IsSingleDigit" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Digits Only" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Palindrome" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Single Digit", () => {
    it("should return true if the name has a single digit in it", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "1",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(3);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "IsSingleDigit" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Digits Only" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Palindrome" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Double Digit", () => {
    it("should return true if the name has exactly 2 digits in it", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "12",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(2);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "IsDoubleDigit" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Digits Only" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Zero Ex Double Digit", () => {
    it("should return true if the name has 0x followed by 2 digits", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "0x12",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(1);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "IsZeroExDoubleDigit" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
    it("should return true if the name has 0x followed by more than 2 digits", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "0x123",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(0);
      }
    });
  });

  describe("999", () => {
    it("should return true if the name has 3 digits only", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "026",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(2);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "999 Club" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Digits Only" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("10k", () => {
    it("should return true if the name has 4 digits only", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "4267",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(2);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "10k Club" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Digits Only" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("100k", () => {
    it("should return true if the name has 5 digits only", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "00656",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(2);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "100k Club" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Digits Only" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Three letters", () => {
    it("should return true if the name has 3 letters only", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "abc",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(2);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "3 Letter Name" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Letters Only" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Four letters", () => {
    it("should return true if the name has 4 letters only", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "abcd",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(2);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "4 Letter Name" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Letters Only" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Five letters", () => {
    it("should return true if the name has 5 letters only", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "abcde",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(2);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "5 Letter Name" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Letters Only" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Digits Only", () => {
    it("should return true if the name only has numerical digits", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "12541251241",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(1);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Digits Only" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Emojis Only", () => {
    it("should return true if the name has emojis only", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "🥸😂",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(1);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Emojis Only" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Single Emoji", () => {
    it("should return true if the name has a single emoji only", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "🥸",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(2);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Emojis Only" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Single Emoji" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("NSFW", () => {
    it("should return true if the name has a bad word in it", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "asshole",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(
          attributes.filter((attribute) => {
            return attribute.trait_type == "NSFW" && attribute.value == "True";
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Letters Only" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Palindrome", () => {
    it("should return true if the name has a palindrome in it", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "racecar",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(2);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Palindrome" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Letters Only" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Letters Only", () => {
    it("should return true if the name has only letters in it", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(key, {
          name: "asdgaewbwaerabweab",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        });
        expect(attributes.length).to.equal(1);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Letters Only" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Name Override", () => {
    it("Should use the override name", () => {
      for (const key of DOMAIN_NAME_COLLECTIONS_PARSERS.keys()) {
        const attributes = AttributeParser.parse(
          key,
          {
            name: "123",
            symbol: "",
            description: "",
            image: "",
            animation_url: "",
            external_url: "",
            attributes: [],
            properties: [
              {
                files: [
                  {
                    uri: "",
                    type: "",
                    cdn: false,
                  },
                ],
                category: "",
              },
            ],
          },
          "racecar"
        );
        expect(attributes.length).to.equal(2);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Palindrome" && attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
        expect(
          attributes.filter((attribute) => {
            return (
              attribute.trait_type == "Letters Only" &&
              attribute.value == "True"
            );
          }).length > 0
        ).to.equal(true);
      }
    });
  });

  describe("Non Domain Collection", () => {
    it("If it's not a Domain Collection, no attributes should be added", () => {
      const attributes = AttributeParser.parse(
        "non_domain_project_id",
        {
          name: "123",
          symbol: "",
          description: "",
          image: "",
          animation_url: "",
          external_url: "",
          attributes: [],
          properties: [
            {
              files: [
                {
                  uri: "",
                  type: "",
                  cdn: false,
                },
              ],
              category: "",
            },
          ],
        },
        "racecar"
      );
      expect(attributes.length).to.equal(0);
    });
  });
});
