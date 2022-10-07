import { ConnectWallet, useContract, useAddress, useOwnedNFTs, ThirdwebNftMedia, Web3Button } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();
  const { contract } = useContract("0xc849377507d22BE75A45BfaEFB8a98211ae109bC");
  const { data: nfts } = useOwnedNFTs(contract, address); 

  return (
    <div>
          <ConnectWallet accentColor="blue" colorMode="light" />
          <hr />
          {nfts?.map((nft) => (
          <div key={nft.metadata.id.toString()}>
            <ThirdwebNftMedia metadata={nft.metadata} />
            {nft.metadata.name}</div>))}
          <hr />
          <Web3Button 
            contractAddress={"0xc849377507d22BE75A45BfaEFB8a98211ae109bC"}
            action={(contract) => contract.erc1155.claim(0,1)}
          >
            Claim Bada
          </Web3Button>
          <hr />
          <Web3Button 
            contractAddress={"0xc849377507d22BE75A45BfaEFB8a98211ae109bC"}
            accentColor="red"
            action={(contract) => contract.call("evolve")}
          >
            Evolve
          </Web3Button>
          
    </div>
  );
}
