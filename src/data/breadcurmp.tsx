export const BreadcrumpCreateor = (data: any) => {
    if (data.ToSub != undefined) {
        if (data.ToSub.ToSub != undefined) {

            if (data.ToSub.ToSub.ToSub != undefined) {
                return [
                    {
                        url: '/',
                        name: 'خانه'
                    },
                    {
                        url: '/group',
                        name: 'گروه محصولات'
                    },


                    {
                        url: `/group/${data.ToSub.ToSub.ToSub.url}`,
                        name: data.ToSub.ToSub.ToSub.name
                    },
                    {
                        url: `/group/${data.ToSub.ToSub.url}`,
                        name: data.ToSub.ToSub.name
                    },
                    {
                        url: `/group/${data.ToSub.url}`,
                        name: data.ToSub.name
                    },
                    {

                        name: data.name
                    }
                ]

            } else {
                return [
                    {
                        url: '/',
                        name: 'خانه'
                    },
                    {
                        url: '/group',
                        name: 'گروه محصولات'
                    },


                    {
                        url: `/group/${data.ToSub.ToSub.url}`,
                        name: data.ToSub.ToSub.name
                    },
                    {
                        url: `/group/${data.ToSub.url}`,
                        name: data.ToSub.name
                    },
                    {

                        name: data.name
                    }
                ]
            }

        } else {
            return [
                {
                    url: '/',
                    name: 'خانه'
                },
                {
                    url: '/group',
                    name: 'گروه محصولات'
                },



                {
                    url: `/group/${data.ToSub.url}`,
                    name: data.ToSub.name
                },
                {

                    name: data.name
                }
            ]
        }

    }else{
        return [
            {
                url: '/',
                name: 'خانه'
            },
            {
                url: '/group',
                name: 'گروه محصولات'
            },
            {

                name: data.name
            }
        ]
    }
}

export const BreadcrumpCreateor2 = (data: any) => {
    if (data.ToSub != undefined) {
        if (data.ToSub.ToSub != undefined) {

            if (data.ToSub.ToSub.ToSub != undefined) {
                return [
                    {
                        url: '/',
                        name: 'خانه'
                    },
                    {
                        url: '/group',
                        name: 'گروه محصولات'
                    },
                    {
                        url: `/group/${data.ToSub.ToSub.ToSub.url}`,
                        name: data.ToSub.ToSub.ToSub.name
                    },
                    {
                        url: `/group/${data.ToSub.ToSub.url}`,
                        name: data.ToSub.ToSub.name
                    },
                    {
                        url: `/group/${data.ToSub.url}`,
                        name: data.ToSub.name
                    },
                    {
                        url: `/group/${data.url}`,
                        name: data.name
                    }
                ]

            } else {
                return [
                    {
                        url: '/',
                        name: 'خانه'
                    },
                    {
                        url: '/group',
                        name: 'گروه محصولات'
                    },
                    {
                        url: `/group/${data.ToSub.ToSub.url}`,
                        name: data.ToSub.ToSub.name
                    },
                    {
                        url: `/group/${data.ToSub.url}`,
                        name: data.ToSub.name
                    },
                    {
                        url: `/group/${data.url}`,
                        name: data.name
                    }
                ]
            }

        } else {
            return [
                {
                    url: '/',
                    name: 'خانه'
                },
                {
                    url: '/group',
                    name: 'گروه محصولات'
                },
                {
                    url: `/group/${data.ToSub.url}`,
                    name: data.ToSub.name
                },
                {
                    url: `/group/${data.url}`,
                    name: data.name
                }
            ]
        }

    }else{
        return [
            {
                url: '/',
                name: 'خانه'
            },
            {
                url: '/group',
                name: 'گروه محصولات'
            },
            {
                url: `/group/${data.url}`,
                name: data.name
            }
        ]
    }
}