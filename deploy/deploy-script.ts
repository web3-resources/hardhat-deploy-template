import { HardhatRuntimeEnvironment } from "hardhat/types"
import "../arguments"

export default async function ({ ethers, getNamedAccounts, deployments }: HardhatRuntimeEnvironment) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const { address } = await deploy("MyToken", {
    from: deployer,
    log: true,
    deterministicDeployment: false,
    contract: "contracts/MyToken.sol:MyToken",
  })

  console.log("deployed at ", address)
}
