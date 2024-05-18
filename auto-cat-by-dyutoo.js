// Copyright (C) 2022 Opera Norway AS. All rights reserved.
//
// This file is an original work developed by Opera

function updateUserStyles() {
  opr.userStylesPrivate.getStyles(styles => {
    let element = document.head.querySelector('#operaUserStyle');
    if (!element) {
      element = document.createElement('style');
      element.type = 'text/css';
      element.id = 'operaUserStyle';
      document.head.appendChild(element);
    }
    element.textContent = styles.join('\n');
  });
}

opr.userStylesPrivate.onStylesUpdated.addListener(() => {
  updateUserStyles();
});

updateUserStyles();
