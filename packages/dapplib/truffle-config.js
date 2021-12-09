require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth soap until install enrich olympic genuine'; 
let testAccounts = [
"0xfc79e9c5ea9d79ff97551fddbf3dc2dee7b83b81479ef76dac828fc2fc6d18fa",
"0x0bdb6aa8250bed77987a4320703bb7a9540b4f287547757b3625da49baf2deff",
"0x511c6d61c99664106dfa5851b2bc32a8cc8479e78458e16b8a61c2d55bd0797a",
"0xa219d929ac56bca05570371168aecf2fa2af16ae690c0283c1c33e355a0bcbf9",
"0x613d8153297bc0dae66c2f825e822350279de9fb0a99076e4a9f7109902df731",
"0x7068f6c936b74870348a9efd10b33c4224dbb1fc882540409a532351a77a2bd8",
"0x623695d59e3ecc3402c2f0af3ae4fbe9a5c1f5f5882c9ec6951a2dbab705bcdf",
"0x9792b86c0c777ce9dbedb4a77fb87746496c4ad7feedfa0c51493cc00a35d25c",
"0x61c4bf0a4fc48af50c9219e84a6129919d3496dae8c27693c63a4834f89ae48a",
"0x194b2b262353c20c6a58c5d1b73fd80481110fa4ba77694495c6f1bc66d49e2f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


