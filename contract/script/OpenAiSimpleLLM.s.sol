// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {OpenAiSimpleLLM} from "../src/OpenAiSimpleLLM.sol";

contract CounterScript is Script {
    OpenAiSimpleLLM public openai;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        openai = new OpenAiSimpleLLM();

        vm.stopBroadcast();
    }
}
