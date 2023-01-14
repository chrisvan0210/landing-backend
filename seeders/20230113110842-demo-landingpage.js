'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('landingpages', [{
      title: 'myplay.club',
      url: 'https://www.myplay.club',
      keyword: 'keyword',
      description: 'description',
      analytics: 'analytics',
      affid: '123',
      facebookcode: 'facebookcode',
      noscript: `<!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZGQ4F2"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->`,
      mainurl: 'https://www.fb88you.com/',
      redirect: 'https://www.fb88you.com/',
      h1: '',
      h2: '',
      button1: '',
      button2: '',
      button3: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('landingpages', null, {});
  }
};
