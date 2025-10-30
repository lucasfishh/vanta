#!/bin/bash
# One-time TLS bootstrap for the NeuroSync stack.
# Run from the project root on the server after `.env` is in place.
set -e

DOMAINS=(neuro-sync.app www.neuro-sync.app docs.neuro-sync.app)
