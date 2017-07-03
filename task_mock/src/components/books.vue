<template>
    <div class="books" v-if="!this.$store.state.auth">
      <div>
        <h1>Books !auth</h1>
        <hr/>
        <div class="list">
            <ul id="listAll">
                <li v-for="author in users">
                    <h2>
                        {{ author.name }}
                    </h2>
                    <div>
                        <span>{{ author.contacts.phone }}</span>
                        <br/>
                        <span> {{ author.contacts.email }}</span>
                    </div>
                    <ul class="bookList">
                        <hr/>
                        <li v-for="authorsBook in author.literature">- {{author.name}} "{{authorsBook}}"
                            <hr/>
                        </li>
                    </ul>
                </li>
            </ul>
        </div> 
      </div>
    </div>
    <div class="books" v-else>
      <div>
        <h1>Books auth</h1>
        <hr/>
        <div>
            Name: {{activeUserListObj.name}}
        </div>
        <div>
            e-mail :{{activeUserListObj.contacts.email}}
        </div>
        <div class="add_book">
            <div>
                <h1>Add Book</h1>
                <hr/>
                <!--
                <div>
                <label for="writer">writer: </label>
                <input id="writer" type="text" v-model="obj.writer"/>
                </div>
                <div>
                -->
                <label for="book-name">bookName: </label>
                <input id="book-name" type="text" v-model="obj.bookName"/>
                </div>
                
                <div>writer: {{obj.writer}}</div> 
                
                <div>bookName: {{obj.bookName}}</div>       
                <button v-on:click="addBook"> Add book </button>
                <button v-on:click="cancel"> Cancel </button>    
            </div> 
        </div>
        <div class="list">
        <div>
            Book List:
        </div>
                <ol id="userBookList">
                    <li v-for="bookName in activeUserListObj.literature">
                        <h2>
                            {{ bookName }}
                        </h2>
                    </li>
                </ol>
        </div> 
      </div>
    </div>
</template>

<script>


export default {
    data: function() {
        return {
            obj: {
                writer: '',
                bookName: ''
            }
        }
    },
    computed: {
        users() {
            return this.$store.state.usersList.users;
        },
        activeUserListObj() {
            return this.$store.getters.getActiveUserListObj;
        }
    },
    methods: {
        cancel() {
            this.obj.writer = '';
            this.obj.bookName = '';
        },
        addBook() {
            this.$store.commit('addBook', this.obj);
            this.cancel();
        }
    }
}
</script>

<style>
    .books {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 50px;
    }
    .books > div {
      border: 2px solid black;
      padding: 20px;
      border-radius: 10px;
      width: 60%;
    }
    .books li {
        /*list-style-type: none; */
    }
    .books .list {
        text-align: left;
    }
    .books #listAll > li {
        margin-top: 50px;
    }
    .books .list #userBookList {
        list-style-type: decimal;
        font-size: 22px;
        font-weight: bold;
    }
</style>