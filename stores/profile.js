export const useProfileStore = defineStore('profile', {
    state: () => ({
      profile: {
        firstName: 'admin',
        lastName: 'admin',
        birthdate: '2023-11-05',
        description: 'description',
        city: 'Minsk',
      },
    }),
    actions: {
        updateProfile(profile) {
          this.profile = profile
        },
    }
  })
