import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Connection, PublicKey } from '@solana/web3.js';
import { CONFIG } from '../config';
import { DbService } from '../db/db.service';
import { RegistryService } from '../registry/registry.service';
