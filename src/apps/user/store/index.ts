import { defineStore } from 'pinia'
import { UserInterface } from '../models/user.interface'
import { IToken } from '../models'


export const useUserStore = defineStore('userStore1', {
  // arrow function recommended for full type inference

  
  state: () => {
    const isAuthenticated: boolean = false

    return {
      users: [] as UserInterface[],
      token: {
        refresh:'',
        access:''
      } as IToken,
      isAuthenticated
    }
  },

  getters: {
    getToken: (state) => {
      return state.token
    }
  },

  actions: {
    setToken(token: IToken) {
      this.token = token
    },

    setCookie(key: string, value: any, days: number) {
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);
    
      const expires = `expires=${expirationDate.toUTCString()}`;
      document.cookie = `${key}=${value}; ${expires}; path=/`;
    },

    logOut(): boolean {
      try {
        if (this.token) {
          document.cookie = 'token' + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          this.token = {refresh:'', access:''}
          console.log('---------LOGOUT USER')
           return this.isAuthenticated = false
        }
      } catch (ex) {
        console.log('----------LOGOUT FAILED')
      }
      return this.isAuthenticated
    }

  }
})