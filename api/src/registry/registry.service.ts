import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { CONFIG } from '../config';
import { normalizeName, isValidName } from '../common/name.util';

export interface AgentRow {
  name: string;
  owner: string;
  resolver: string;
  metadata_uri: string;
