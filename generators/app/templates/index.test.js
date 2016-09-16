import React from 'react';
import {expect} from 'chai';
import <%= componentName %> from './index';
import messages from './messages';

describe('<%= componentName>', ()=>{
	describe("Tests", ()=>{
		it("has defined test", ()=>{
			expect(false).to.be.true;
		});
	});

	describe("i18n", ()=>{
		it("should not have placeholder message", ()=>{
			expect(messages.placeholderMsg).to.not.exist;
		});
	});
});