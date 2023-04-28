// Decode private (nsec) or public (npub) 
// key from bech32 to hex for ease of use
// with nostr protocol

// BECH32_STRING example: 

import { nip19 } from 'nostr-tools'

let {type, data} = nip19.decode(INSERT_BECH32_STRING_HERE)
console.log(`string has type of ${type}`)
console.log(`string is now ${data}`)