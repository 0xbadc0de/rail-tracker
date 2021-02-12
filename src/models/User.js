import { Model } from '@vuex-orm/core'

export default class User extends Model {
    // This is the name used as module name of the Vuex Store.
    static entity = 'users'

    // List of all fields (schema) of the post model. `this.attr` is used
    // for the generic field type. The argument is the default value.
    static fields () {
        return {
            id: this.attr(null),
            email: this.attr(''),
            email_verified_at: this.attr(''),
            is_active: this.attr(false),
            is_admin: this.attr(false),
            created_at: this.attr(''),
            updated_at: this.attr('')
        }
    }

    static apiConfig = {
        actions: {
            fetchById (id) {
                return this.get(`users/${id}`)
            },
            currentUser () {
                return this.get(`users/current`, {
                    save: false
                })
            },
            fetchList (page) {
                return this.get(`users`, {
                    dataKey: 'data',
                    params: {
                        page
                    }
                })
            }
        }
    }
}
