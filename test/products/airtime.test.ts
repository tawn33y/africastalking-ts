/* eslint-disable @typescript-eslint/no-unused-expressions */

import 'mocha';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Client } from '../../dist';
import { validCredentials } from '../fixtures';

chai.use(chaiAsPromised);

describe('Airtime', () => {
  const client = new Client(validCredentials);

  context('invalid options', () => {
    it('send() cannot be empty', () => {
      expect(client.sendAirtimeRequest({} as any)).to.be.rejected;
    });

    it('send() must have phoneNumber/currencyCode/amount', () => {
      expect(client.sendAirtimeRequest({
        recipients: [{
          phoneNumber: '+254726166685',
        }],
      } as any)).to.be.rejected;
    });

    it('send() rejects invalid options', () => {
      expect(client.sendAirtimeRequest({
        recipients: [{
          phoneNumber: 'not phone',
          currencyCode: '',
          amount: 'NaN',
        }],
      } as any)).to.be.rejected;
    });
  });

  context('valid options', () => {
    it('sends airtime to one', async () => {
      const result = await client.sendAirtimeRequest({
        recipients: [
          {
            phoneNumber: '+254726166685',
            currencyCode: 'KES',
            amount: 10,
          },
        ],
      });

      expect(result).to.have.property('responses');
    });

    it('sends airtime to many', async () => {
      const result = await client.sendAirtimeRequest({
        recipients: [
          {
            phoneNumber: '+254726166685',
            currencyCode: 'KES',
            amount: 90,
          },
          {
            phoneNumber: '+254726863825',
            currencyCode: 'KES',
            amount: 897,
          },
        ],
      });

      expect(result).to.have.property('responses');
    });
  });
});
