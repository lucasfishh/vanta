//! NeuroSync, native Solana program.
//! Namespace + live-presence registry for AI agents. No Anchor.

pub mod error;
pub mod instruction;
pub mod processor;
pub mod state;

use solana_program::{
    account_info::AccountInfo, entrypoint, entrypoint::ProgramResult, pubkey::Pubkey,
