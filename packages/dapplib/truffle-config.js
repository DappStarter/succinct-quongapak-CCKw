require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remind concert hunt industry success theory'; 
let testAccounts = [
"0xfd49b5ae14751451cc55b69bd34ddfb5437a02106862e1ab7ca0aaa6f647b3b1",
"0xf17169a9b0d9bc57c4fc97cbf96d86fb3aea17d5959a207738f9a969dbd8398e",
"0xc8eee28ed9961667e63598b381e162ff61be1371605eb94400036bda00387e12",
"0x05556e3a46da121b2607040c79e973892fd0644ad7b47ed201abb1fa7f65ceeb",
"0xe9fb41d212c02f8434097a3204b555c7d7449ea823ed24520c41fa69570a9f06",
"0x470ac154055bc673389080f5f42e55259f0d523813116b091ab120b0c29bcd44",
"0xd550d62934169ba62072e0b0e5b81f939f8648b4add27f0e8706f963baf954f8",
"0x17cb223d28c33efca8b21f62b1657cbcbec95c73e8adb8fbba76f7aa0667f14b",
"0xce3ba685d54fbaf26379ff229bd05e310fd33e6dfe964abb91e33ab0ea00afa2",
"0xcc70c8436487e6e0037bab1cbb8da27ae6e6aea73f45efe9871d5c32c7ebba9b"
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


