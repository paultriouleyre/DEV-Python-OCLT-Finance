Main goal of this code is to extract financial operations from HIVE blockchain - to make them more readable and usable to create accounting entries for any entity using HIVE as a mean of payment:

What is done :
- Reteive all financial transaction on HIVE layer 1 blockchain
- Store these transaction in a standardized way on google drive / excel file
- Able to source all outgoing transaction on HIVE L2 (moslty OCLT)

Noticed that available transaction of Token on the main chain does not contain enough details for accounting.
 -> Use Node.JS and HIVE Engine to extract in excel file L2 trnasaction from the blockchain.
 -> Now I am able to get all recent transaction... we still need to gather only OCLT related transaction. For this need to check with the node js API

Problem:
- Not able to source incoming transaction on L2 blockchain. Idk why but we can't see on HIVE blockexplored incoming OCLT transaction - see the last transaciton from paulo21 to ocln-finacct, sent 0.2 OCLT, and there is no log on ocln-finacct transactions list.... ?
  - To solve this we need to access L2 API (HIVE engine), no ideas yet how to do it.
  - Something arrise : On L2 transaction (custon JSON), when placing a sell / buy order this generate a transaction - which need to be ignored for the time being


Next steps:
- List all OCL Hive accounts, to gather all transaction
- add a field, in the panda dataframe indicating the name of the source wallet, from where we extract the data (for intercompany transactions)
- Find a way to extract L2 transaction using HIVE engine / VLS or....
- Define acounting scheme per type of transaction to automate accounting entries generation
- source FX rates (idk why but Yahoo finance does not work)
- tbd...
