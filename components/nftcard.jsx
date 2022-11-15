import React from 'react'
import { EtherscanIcon } from "./etherscan-icon"

export const NFTCard = ({ nft }) => {
    var img
    const shortAddress = (address) => {
        return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`
      }

    return (
        <div className="hover:scale-110 w-1/4 flex flex-col ">
        <div className="rounded-md">
        <a target='_blank' href={`https://opensea.io/assets/ethereum/${nft.contract.address}`} className='flex items-center gap-2' rel="noreferrer">
            <img className=" object-cover h-128 w-full rounded-t-2xl" src={nft.media[0].gateway} ></img>
        </a>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-300 rounded-b-2xl h-160 ">

            <h2 className="text-xl text-gray-800">{nft.title}</h2>
            <p className='flex items-center gap-2'> 
            <EtherscanIcon nft = { nft } />
            <a target='_blank' href={`https://etherscan.io/address/${nft.contract.address}`} className='flex items-center gap-2' rel="noreferrer">
                {shortAddress(nft.contract.address)}</a></p>
        </div>
        <hr></hr>
        <div className="flex-grow mt-2">

        </div>
        </div>
    )
}

