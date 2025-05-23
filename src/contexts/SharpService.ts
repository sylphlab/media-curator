import sharp from 'sharp';
import { ProgramOptions } from '../types';
// import { injectable } from "inversify"; // REMOVED INVERSIFY

// @injectable() // REMOVED INVERSIFY
export class SharpService {
  constructor(options: ProgramOptions) {
    sharp.concurrency(options.concurrency);
  }

  get create() {
    return sharp;
  }
}
