import { defineStore } from 'pinia'
import { UserInterface } from '../models/user.interface'
import { IToken } from '../models'


export const useUserStore = defineStore('userStore1', {
  // arrow function recommended for full type inference

  
  state: () => {

    return {
      users: [] as UserInterface[],
      token: {
        refresh:'',
        access:''
      } as IToken
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

  }
})