// FIXME live-common

import { LanguageMap } from "./languages";

export const supportLinkByTokenType = {
  erc20:
    "https://support.ledger.com/hc/en-us/articles/4404389645329-Manage-ERC20-tokens?docs=true&utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=receive_account_flow",
  trc10:
    "https://support.ledger.com/hc/en-us/articles/360013062159?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=receive_account_flow",
  trc20:
    "https://support.ledger.com/hc/en-us/articles/360013062159?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=receive_account_flow",
  asa: "https://support.ledger.com/hc/en-us/articles/360015896040?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=receive_account_flow",
  nfts: "https://support.ledger.com/hc/en-us/articles/4404389453841-Receive-crypto-assets?utm_medium=self_referral&utm_content=receive_account_flow",
};

const errors: Record<string, string> = {
  CantOpenDevice:
    "https://support.ledger.com/hc/en-us/articles/115005165269?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=error_cantopendevice",
  WrongDeviceForAccount:
    "https://support.ledger.com/hc/en-us/articles/360025322153-Wrong-private-keys-for-account?support=true",
  SyncError:
    "https://support.ledger.com/hc/en-us/articles/360012207759-Solve-a-synchronization-error?support=true",
  ServiceStatusWarning: "https://status.ledger.com",
  EConnReset:
    "https://support.ledger.com/hc/en-us/articles/6793501085981?support=true&utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=error_connect_manager",
  TronSendTrc20ToNewAccountForbidden:
    "https://support.ledger.com/hc/en-us/articles/6516823445533--Sending-TRC20-to-a-new-account-won-t-activate-it-message-in-Ledger-Live?support=true",
  TronStakingDisable: "https://support.ledger.com/hc/en-us/articles/9949980566173?support=true",
  OperatingSystemOutdated: "https://support.ledger.com/hc/articles/8083692639901?support=true",
};

const faq: LanguageMap = {
  en: "https://support.ledger.com/hc/en-us/categories/4404369571601-Support?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=faq",
  fr: "https://support.ledger.com/hc/fr-fr/categories/4404369571601-Assistance?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=faq",
  es: "https://support.ledger.com/hc/es/categories/4404369571601-Soporte?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=faq",
  de: "https://support.ledger.com/hc/de/categories/4404369571601-Support?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=faq",
  ru: "https://support.ledger.com/hc/ru/categories/4404369571601-%D0%A1%D0%BB%D1%83%D0%B6%D0%B1%D0%B0-%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B8?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=faq",
  zh: "https://support.ledger.com/hc/zh-cn/categories/4404369571601-%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=faq",
  tr: "https://support.ledger.com/hc/tr/categories/4404369571601-Destek?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=faq",
  pt: "https://support.ledger.com/hc/pt-br/categories/4404369571601-Suporte-Assistance?utm_content=faq&utm_medium=self_referral&utm_source=ledger_live_desktop&support=true",
  ja: "https://support.ledger.com/hc/ja/categories/4404369571601-%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=faq",
  ko: "https://support.ledger.com/hc/ko/categories/4404369571601-%EC%A7%80%EC%9B%90?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=faq",
};

const terms: LanguageMap = {
  en: "https://shop.ledger.com/pages/ledger-live-terms-of-use?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=terms",
  fr: "https://shop.ledger.com/fr/pages/ledger-live-terms-of-use?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=terms",
  de: "https://shop.ledger.com/de/pages/ledger-live-terms-of-use?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=terms",
  es: "https://shop.ledger.com/es/pages/ledger-live-terms-of-use?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=terms",
  tr: "https://shop.ledger.com/tr/pages/ledger-live-terms-of-use?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=terms",
  ru: "https://shop.ledger.com/ru/pages/ledger-live-terms-of-use?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=terms",
  pt: "https://shop.ledger.com/pt-br/pages/ledger-live-terms-of-use?utm_content=terms&utm_medium=self_referral&utm_source=ledger_live_desktop",
  ja: "https://shop.ledger.com/ja/pages/ledger-live-terms-of-use?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=terms",
  zh: "https://shop.ledger.com/zh-cn/pages/ledger-live-terms-of-use?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=terms",
  ko: "https://shop.ledger.com/ko/pages/ledger-live-terms-of-use?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=terms",
};

const privacyPolicy: LanguageMap = {
  en: "https://www.ledger.com/privacy-policy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=privacy",
  fr: "https://www.ledger.com/fr/privacy-policy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=privacy",
  de: "https://www.ledger.com/de/privacy-policy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=privacy",
  es: "https://www.ledger.com/es/privacy-policy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=privacy",
  tr: "https://www.ledger.com/tr/privacy-policy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=privacy",
  ja: "https://www.ledger.com/ja/privacy-policy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=privacy",
  pt: "https://www.ledger.com/pt-br/privacy-policy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=privacy",
  ru: "https://www.ledger.com/ru/privacy-policy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=privacy",
  zh: "https://www.ledger.com/zh-hans/privacy-policy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=privacy",
  ko: "https://www.ledger.com/ko/privacy-policy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=privacy",
};

const contactSupportWebview: LanguageMap = {
  de: "https://support.ledger.com/hc/de/articles/4423020306705-Kontakt?support=true",
  en: "https://support.ledger.com/hc/en-us/articles/4423020306705-Contact-Us?support=true",
  es: "https://support.ledger.com/hc/es/articles/4423020306705-Contacto?support=true",
  fr: "https://support.ledger.com/hc/fr-fr/articles/4423020306705-Nous-contacter?support=true",
  ja: "https://support.ledger.com/hc/ja/articles/4423020306705-%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B?support=true",
  ko: "https://support.ledger.com/hc/ko/articles/4423020306705-%EA%B3%A0%EA%B0%9D-%EB%AC%B8%EC%9D%98?support=true",
  pt: "https://support.ledger.com/hc/pt-br/articles/4423020306705-Entre-em-contato-conosco?support=true",
  ru: "https://support.ledger.com/hc/ru/articles/4423020306705-%D0%A1%D0%B2%D1%8F%D0%B6%D0%B8%D1%82%D0%B5%D1%81%D1%8C-%D1%81-%D0%BD%D0%B0%D0%BC%D0%B8?support=true",
  tr: "https://support.ledger.com/hc/tr/articles/4423020306705-Bize-Ula%C5%9F%C4%B1n?support=true",
  zh: "https://support.ledger.com/hc/zh-cn/articles/4423020306705-%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC?support=true",
};

const buyNew: LanguageMap = {
  en: "https://shop.ledger.com/pages/hardware-wallets-comparison?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
  fr: "https://shop.ledger.com/fr/pages/hardware-wallets-comparison?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
  es: "https://shop.ledger.com/es/pages/hardware-wallets-comparison?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
  de: "https://shop.ledger.com/de/pages/hardware-wallets-comparison?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
  ru: "https://shop.ledger.com/ru/pages/hardware-wallets-comparison?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
  zh: "https://shop.ledger.com/zh-cn/pages/hardware-wallets-comparison?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
  pt: "https://shop.ledger.com/pt/pages/hardware-wallets-comparison?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
  tr: "https://shop.ledger.com/tr/pages/hardware-wallets-comparison?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
  ja: "https://shop.ledger.com/ja/pages/hardware-wallets-comparison?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
  ko: "https://shop.ledger.com/ko/pages/hardware-wallets-comparison?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
};

const genuineCheck: LanguageMap = {
  en: "https://support.ledger.com/hc/en-us/articles/4404389367057-Is-my-Ledger-device-genuine-?docs=true",
  de: "https://support.ledger.com/hc/de/articles/4404389367057-Ist-mein-Ledger-Ger%C3%A4t-echt-?docs=true",
  es: "https://support.ledger.com/hc/es/articles/4404389367057--Es-original-mi-dispositivo-Ledger-?docs=true",
  fr: "https://support.ledger.com/hc/fr-fr/articles/4404389367057-Mon-appareil-Ledger-est-il-authentique-?docs=true",
  ja: "https://support.ledger.com/hc/ja/articles/4404389367057-%E7%A7%81%E3%81%AELedger%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%81%AF%E6%AD%A3%E8%A6%8F%E5%93%81%E3%81%A7%E3%81%99%E3%81%8B-?docs=true",
  ko: "https://support.ledger.com/hc/ko/articles/4404389367057-%EB%82%B4-Ledger-%EC%9E%A5%EC%B9%98%EB%8A%94-%EC%A0%95%ED%92%88%EC%9D%B8%EA%B0%80%EC%9A%94-?docs=true",
  pt: "https://support.ledger.com/hc/pt-br/articles/4404389367057-Meu-dispositivo-Ledger-%C3%A9-aut%C3%AAntico-?docs=true",
  ru: "https://support.ledger.com/hc/ru/articles/4404389367057-%D0%AF%D0%B2%D0%BB%D1%8F%D0%B5%D1%82%D1%81%D1%8F-%D0%BB%D0%B8-%D0%BC%D0%BE%D1%91-%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-Ledger-%D0%BF%D0%BE%D0%B4%D0%BB%D0%B8%D0%BD%D0%BD%D1%8B%D0%BC-?docs=true",
  tr: "https://support.ledger.com/hc/tr/articles/4404389367057-Ledger-cihaz%C4%B1m-orijinal-mi-?docs=true",
  zh: "https://support.ledger.com/hc/zh-cn/articles/4404389367057-%E6%88%91%E7%9A%84-Ledger-%E8%AE%BE%E5%A4%87%E6%98%AF%E5%90%A6%E4%B8%BA%E6%AD%A3%E5%93%81-?docs=true",
};

export const urls = {
  ledger: "https://www.ledger.com",
  liveHome:
    "https://www.ledger.com/pages/ledger-live?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=home",
  social: {
    twitter: "https://twitter.com/Ledger",
    github: "https://github.com/LedgerHQ/ledger-live",
    reddit: "https://www.reddit.com/r/ledgerwallet/",
    facebook: "https://www.facebook.com/Ledger/",
  },
  satstacks: {
    download: "https://github.com/ledgerhq/satstack/releases/latest",
    learnMore: "https://support.ledger.com/hc/en-us/articles/360017551659",
  },
  // Campaigns
  promoNanoX:
    "https://www.ledger.com/pages/ledger-nano-x#utm_source=Ledger%20Live%20Desktop%20App&utm_medium=Ledger%20Live&utm_campaign=Ledger%20Live%20Desktop%20-%20Banner%20LNX",
  // Ledger support
  faq,
  ledgerStatus: "https://status.ledger.com/",
  syncErrors:
    "https://support.ledger.com/hc/en-us/articles/360012207759?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=error_syncerror",
  terms,
  buyNew,
  noDevice: {
    learnMore:
      "https://www.ledger.com?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
    learnMoreCrypto:
      "https://www.ledger.com/academy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=onboarding",
  },
  managerHelpRequest:
    "https://support.ledger.com/hc/en-us/articles/4404382258961-Install-uninstall-and-update-apps?docs=true&utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=manager_hanging",
  contactSupport:
    "https://support.ledger.com/hc/en-us/requests/new?ticket_form_id=248165?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=support_contact",
  contactSupportWebview,
  whatIsARecoveryPhrase: "https://www.ledger.com/academy/crypto/what-is-a-recovery-phrase",
  feesMoreInfo:
    "https://support.ledger.com/hc/en-us/articles/360021039173-Choose-network-fees?docs=true",
  feesEIP1559MoreInfo: "https://support.ledger.com/hc/en-us/articles/6018110754845?docs=true",
  recipientAddressInfo:
    "https://support.ledger.com/hc/en-us/articles/4404389453841-Receive-crypto-assets?docs=true",
  managerAppLearnMore: "https://support.ledger.com/hc/en-us/categories/4404376139409?docs=true",
  privacyPolicy,
  troubleshootingUSB:
    "https://support.ledger.com/hc/en-us/articles/115005165269?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=error",
  troubleshootingCrash:
    "https://support.ledger.com/hc/en-us/articles/360012598060?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=error",
  appSupport: "https://support.ledger.com/hc/en-us/sections/4404369637521-Crypto-assets?docs=true",
  coinControl:
    "https://support.ledger.com/hc/en-us/articles/360015996580?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=send_coincontrol",
  githubIssues:
    "https://github.com/LedgerHQ/ledger-live/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Acomments-desc",
  multipleDestinationAddresses:
    "https://support.ledger.com/hc/en-us/articles/360033802154-Change-addresses?support=true",
  updateDeviceFirmware: {
    nanoS:
      "https://support.ledger.com/hc/en-us/articles/360002731113?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=firmwareupdate",
    nanoSP:
      "https://support.ledger.com/hc/en-us/articles/4445777839901?&utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=firmwareupdate",
    nanoX:
      "https://support.ledger.com/hc/en-us/articles/360013349800?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=firmwareupdate",
    blue: "https://support.ledger.com/hc/en-us/articles/360005885733?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=firmwareupdate",
  },
  lostPinOrSeed: {
    nanoS:
      "https://support.ledger.com/hc/en-us/articles/4404382075537-Don-t-have-your-Recovery-phrase-?support=true",
    nanoSP:
      "https://support.ledger.com/hc/en-us/articles/4404382075537-Don-t-have-your-Recovery-phrase-?support=true",
    nanoX:
      "https://support.ledger.com/hc/en-us/articles/4404382075537-Don-t-have-your-Recovery-phrase-?support=true",
    blue: "https://support.ledger.com/hc/en-us/articles/4404382075537-Don-t-have-your-Recovery-phrase-?support=true",
  },
  maxSpendable:
    "https://support.ledger.com/hc/en-us/articles/360012960679?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=max_spendable_alert",
  stakingTezos:
    "https://www.ledger.com/staking-tezos?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=tezos",
  stakingTron:
    "https://www.ledger.com/staking-tron?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=tron",
  stakingCosmos:
    "https://www.ledger.com/staking-cosmos?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=cosmos",
  stakingPolkadot:
    "https://support.ledger.com/hc/en-us/articles/360018131260?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=polkadot",
  cardanoStakingRewards: "https://support.ledger.com/hc/articles/7880073204253?docs=true",
  algorandStakingRewards:
    "https://support.ledger.com/hc/en-us/articles/360015897740?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=algorand",
  nearStakingRewards:
    "https://support.ledger.com/hc/en-us/articles/360020450619-NEAR-NEAR-?docs=true",
  polkadotFeesInfo:
    "https://support.ledger.com/hc/en-us/articles/360016289919?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=polkadot",
  elrondStaking: "https://support.ledger.com/hc/articles/7228337345693?support=true",
  xpubLearnMore:
    "https://support.ledger.com/hc/en-us/articles/360011069619?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=edit_account",
  ledgerValidator: "https://www.ledger.com/staking",
  // Banners
  banners: {
    blackfriday:
      "https://shop.ledger.com/pages/black-friday?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=banner_carousel",
    familyPack:
      "https://shop.ledger.com/products/ledger-nano-s-3pack?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=banner_carousel",
    ledgerAcademy:
      "https://www.ledger.com/academy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=banner_carousel",
    ongoingScams:
      "https://www.ledger.com/ongoing-phishing-campaigns?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=banner_carousel",
    valentine:
      "https://shop.ledger.com/pages/valentines-day-special-offers?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=banner_carousel",
    polkaStake:
      "https://www.ledger.com/staking-polkadot?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=banner_carousel",
    twitterIntent: "https://twitter.com/intent/tweet",
  },
  helpModal: {
    gettingStarted:
      "https://www.ledger.com/start?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=help_modal",
    helpCenter:
      "https://support.ledger.com/hc/en-us?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=help_modal",
    ledgerAcademy:
      "https://www.ledger.com/academy?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=help_modal",
    status:
      "https://status.ledger.com?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=help_modal",
  },
  swap: {
    info: "https://www.ledger.com/swap?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=swap_intro",
    learnMore:
      "https://www.ledger.com/swap?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=swap_footer",
    providers: {
      changelly: {
        main: "https://changelly.com/",
        tos: "https://changelly.com/terms-of-use",
        support: "https://support.changelly.com/en/support/tickets/new",
      },
      cic: {
        main: "https://criptointercambio.com/",
        tos: "https://criptointercambio.com/terms-of-use",
        support: "https://criptointercambio.com/en/about",
      },
    },
  },
  exchange: {
    learnMore:
      "https://www.ledger.com/academy/benefits-of-buying-crypto-through-ledger-live?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=exchange",
  },
  platform: {
    developerPage:
      "https://developers.ledger.com?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=catalog",
  },
  // Errors
  errors,
  approvedOperation:
    "https://support.ledger.com/hc/en-us/articles/360020849134-Track-your-transaction?docs=true",
  cryptoOrg: {
    website: "https://crypto.org",
  },
  elrond: {
    website: "https://elrond.com",
  },
  figment: {
    website: "https://www.figment.io",
  },
  solana: {
    staking: "https://support.ledger.com/hc/en-us/articles/4731749170461?docs=true",
    recipient_info: "https://support.ledger.com",
    ledgerByFigmentTC:
      "https://cdn.figment.io/legal/Current%20Ledger_Online%20Staking%20Delgation%20Services%20Agreement.pdf",
  },
  hedera: {
    supportArticleLink:
      "https://support.ledger.com/hc/en-us/articles/4494505217565-Create-a-Ledger-Hedera-HBAR-account-via-HashPack?docs=true",
  },
  celo: {
    ledgerByFigmentTC:
      "https://cdn.figment.io/legal/Current%20Ledger_Online%20Staking%20Delgation%20Services%20Agreement.pdf",
    learnMore:
      "https://support.ledger.com/hc/en-us/articles/360020499920-Celo-CELO-?utm_source=ledger_live_desktop&utm_medium=self_referral&utm_content=celo",
  },
  editEthTx: {
    learnMore: "https://support.ledger.com/hc/articles/9756122596765?support=true",
  },
  ledgerByFigmentTC:
    "https://cdn.figment.io/legal/Current%20Ledger_Online%20Staking%20Delgation%20Services%20Agreement.pdf",
  ens: "https://support.ledger.com/hc/articles/9710787581469?docs=true",
  ledgerLiveMobile: {
    storeLink: "https://r354.adj.st/?adj_t=t2esmlk&adj_campaign=Ledger_Live",
    appStore: "https://apps.apple.com/app/id1361671700",
    playStore: "https://play.google.com/store/apps/details?id=com.ledger.live",
  },
  howToUpdateNewLedger: "https://support.ledger.com/hc/en-us/articles/9305992683165?docs=true",
  genuineCheck,
};

export const vaultSigner = {
  help: "https://help.vault.ledger.com/developer-portal/content/signer/overview",
};
