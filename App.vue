<template>
  <v-app id="inspire">

    <v-navigation-drawer app v-model="drawer">
      
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>


    <v-list dense nav>

      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="{path : subItem.path}"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

    </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark height="40">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer color="indigo" app height="30">
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default { 

  data () {
      return {
        drawer: null,
        items: [
          {
            action: 'local_activity',
            title: '커뮤니티',
            active: true,
            items: [
              { title: '게시판', path: 'board' },
            ],
          },{
            action: 'restaurant',
            title: 'Dining',
            items: [
              { title: 'Breakfast & brunch' , path : '/board1'},
              { title: 'New American', path : '/board2'},
              { title: 'Sushi', path : "/board3"},
            ],
          },

        ],
      }
    },


};
</script>
