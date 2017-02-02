import './sass/main.scss';
import $ from 'jquery';

import {getMenus} from './services/data-service';

/* eslint-disable no-console */

$(function() {
  console.log("retriving data ...");

  getMenus().then(result => {
    let menuList = "";
console.log("displaying data ...");
    result.forEach(menu => {
      menuList+= `
      <li>
        <div>${menu.id}</div>
        <div>${menu.name}</div>
        <div>${menu.description}</div>
        <div>${menu.link}</div>
      </li>
      `
    });

    $('#menus').html(menuList);
  });

});
