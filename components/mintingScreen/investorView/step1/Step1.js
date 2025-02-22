import classnames from 'classnames'
import { useSelector } from 'react-redux'

import { ConnectWalletButton } from '../../../connectWalletButton/ConnectWalletButton'
import { Button, Variants } from '../../../button/Button'

import classes from './step1.module.scss'

export function Step1({
  isWalletConnected,
  forwardStep,
  forwardToCheckOffers,
}) {
  const mintedNftData = useSelector((state) => state.user.mintedNftData)
  const bid = useSelector((state) => state.user.bid)

  return (
    <>
      <h3 className={classes.stepTitle}>Select NFT royalty stream to buy</h3>

      <div className={classes.table}>
        <div className={classes.row}>
          <div className={classnames(classes.cell, classes.th)}>NFT</div>
          <div className={classnames(classes.cell, classes.th)}>NFT Price</div>
          <div className={classnames(classes.cell, classes.th)}>List Date</div>
          <div className={classnames(classes.cell, classes.th)}>Current Highest Bid</div>
        </div>
        {mintedNftData ? (
          <div
            className={classes.row}
            onClick={isWalletConnected ? forwardStep : () => {}}
          >
            <div className={classes.cell}>
              <img className={classes.preview} src={mintedNftData.image} />
              {mintedNftData.name}
            </div>
            <div className={classes.cell}>{mintedNftData.price} ETH</div>
            <div className={classes.cell}>
              {new Date().toLocaleDateString()}
            </div>
            <div className={classes.cell}>{bid}</div>
          </div>
        ) : (
          <div className={classes.cell}>There is no data yet</div>
        )}
      </div>
      <h3 className={classes.checkOffersTitle}>
        Already chosen NFT royalty stream?
      </h3>
      {!isWalletConnected && <ConnectWalletButton />}

      <div>
        <Button
          onClick={forwardToCheckOffers}
          disabled={!isWalletConnected}
          type="submit"
          variant={Variants.PRIMARY}
        >
          Check offers
        </Button>
        {!isWalletConnected && (
          <span className={classes.hint}>
            ?<span className={classes.hintContent}>Connect Wallet first</span>
          </span>
        )}
      </div>
    </>
  )
}
