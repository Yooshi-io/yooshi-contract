Certik Audit Report issues

- YYY-05 3rd Party Dependencies (Minor)
Yooshi protocal relies on PancakeSwap to exchange 3% of the handling fee for liquidity. Of course, we will continue to monitor the status of PancakeSwap to keep our liquidity safe.

- YYY-08  InCorrect Error Message (Minor)

Yes, we think your suggestion is more accurate, but this error message prompt does not affect us to restore the white list of user dividends. Obviously, there is no problem with the logic.

- YYY-09 Contract Gains Non-withdrawable BNB Via The SwapAndLiquify Function (Major)
Yes, this is a thorny question. Fortunately, we have extended some of the functions of this protocol, so that we have a good way to deal with this problem, and we will announce our strategy later.

- YYY-12 Centrailized Risk in addLiquidity (Major)
In fact, we destroy all initial liquidity LPs and obtain LPs in subsequent transactions. Of course, there are some risks in EOA, and the owner will be a multi-sign contract to reduce concentration risk.

- YYY-14 Privileged Ownership (Major)
In the future, we plan to transfer the Owner to the time lock contract

- YYY-15 Lack of input Validation (Major)
Thank you for your proposal. The contract parameters of the BSC mainnet are what we expect.
