import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  public controlUserMenu() {
    // @ts-ignore
    $('.hamburger-user').toggleClass('is-active');
    // @ts-ignore
    $('header').toggleClass('is-active');
    // @ts-ignore
    $('#menu-overlayt').toggleClass('is-active');
    // @ts-ignore
    $('#black-fade').toggleClass('is-active');
    // @ts-ignore
    $('#header-title-div').toggleClass('is-active');
    // @ts-ignore
    $('#black-fade').removeClass('hover');
    // @ts-ignore
    $('#project_close').toggleClass('disabled');
  }

  public removeUserMenu() {
    // @ts-ignore
    $('.hamburger-user').removeClass('is-active');
    // @ts-ignore
    $('header').removeClass('is-active');
    // @ts-ignore
    $('#menu-overlayt').removeClass('is-active');
    // @ts-ignore
    $('#black-fade').removeClass('is-active');
    // @ts-ignore
    $('#header-title-div').removeClass('is-active');
    // @ts-ignore
    $('#black-fade').removeClass('hover');
    // @ts-ignore
    $('#project_close').removeClass('disabled');
  }

  public controlMenu() {
    // @ts-ignore
    $('#logo ').toggleClass('is-active');
    // @ts-ignore
    $('header').toggleClass('is-active');
    // @ts-ignore
    $('#menu-overlay').toggleClass('is-active');
    // @ts-ignore
    $('#black-fade').toggleClass('is-active');
    // @ts-ignore
    $('#header-title-div').toggleClass('is-active');
    // @ts-ignore
    $('#black-fade').removeClass('hover');
    // @ts-ignore
    $('#project_close').toggleClass('disabled');
  }

  public removeMenu() {
    // @ts-ignore
    $('#logo ').removeClass('is-active');
    // @ts-ignore
    $('header').removeClass('is-active');
    // @ts-ignore
    $('#menu-overlay').removeClass('is-active');
    // @ts-ignore
    $('#black-fade').removeClass('is-active');
    // @ts-ignore
    $('#header-title-div').removeClass('is-active');
    // @ts-ignore
    $('#black-fade').removeClass('hover');
    // @ts-ignore
    $('#project_close').removeClass('disabled');
  }
}
