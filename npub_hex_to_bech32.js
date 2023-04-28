// Encode npub hex key to bech32 meant for human-friendlier
// display and input only. Clients should still accept 
// keys in both hex and npub format for now, and convert internally.

// NPUB_HEX_STRING example: 

import { nip19 } from 'nostr-tools'

let {type, data} = nip19.npubEncode(INSERT_NPUB_HEX_STRING_HERE)
console.log(`string has type of ${type}`)
console.log(`string is now ${data}`)