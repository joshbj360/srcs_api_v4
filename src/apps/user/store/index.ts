import { defineStore } from 'pinia'
import { UserInterface } from '../models/user.interface'
import { IToken } from '../models'
import apiClient from '@/api-client'
import { ref, Ref} from 'vue'


export const useUserStore = defineStore('userStore1', {
  // arrow function recommended for full type inference
  state: () => {
    const isAuthenticated: Ref<boolean> = ref(false)

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

    async login(username: string, password: string): Promise<boolean> {
      try {
        // Login User
        const token = await apiClient.users.loginUser(username, password)
    
        // Update the token in the store
        this.setToken(token)
    
        // Update the cookie
        this.setCookie('token', JSON.stringify(token), 1)

        if (token) {
          //  TODO getUser and check if the user.school === activeSchool
           return this.isAuthenticated = true
        }
        
        return false
      } catch(e) {
        console.log('Login failed: ', e)
        return false
      }
              
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