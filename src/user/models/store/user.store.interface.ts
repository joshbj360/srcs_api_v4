// file: src/store/items/models/ItemsStore.interface.ts

// import a reference to our ItemInterface:
import { IToken, UserInterface } from ".."

/**
 * @name UserStoreStateInterface
 * @description Interface represents our user store state
 */
export interface UserStoreStateInterface {
  token: IToken
  users: UserInterface[]
}

/**
 * @name UserStoreActionsInterface
 * @description Interface represents our user store actions
 */
export interface UserStoreActionsInterface {
  loadUsers (): Promise<void>
  loginUser (username:string, password:string): Promise<void>
}

/**
 * @name UserStoreGettersInterface
 * @description Interface represents our store getters
 * Getters will be used to consume the data from the store.
 */
export interface UserStoreGettersInterface {
  token: IToken
  users: UserInterface[]
}
