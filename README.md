# Attribute Parser

The purpose of this repo is to provide a framework for custom parsing of Solana NFT Metadata attributes. The user can configure certain NFT collections denoted by their projectId to follow custom rules that can add additional attributes to the attribute array of the NFT metadata. To add additional rules, simply add an implementation of ITraitParser using data from the metadata of the NFT to modify the attributes array which is subsequently returned. Additionally, there is an optional nameOverride field in case the name on the Metadata account does not match the json metadata. 

An example custom configuration is implemented, examples of how to use the AttributeParser can be found under /tests