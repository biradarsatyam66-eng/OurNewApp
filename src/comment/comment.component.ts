import { Component} from '@angular/core';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
   
    comment = [
  {
    body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
    email: "Meghan_Littel@rene.us",
    name: "provident id voluptas",
    postId: 2
  },
  {
    body: "vero eaque aliquid doloribus et culpa\nrerum nobis libero optio\naspernatur impedit exercitationem\nvoluptatem consequatur",
    email: "john.doe@example.com",
    name: "John Doe",
    postId: 2
  },
  {
    body: "officiis quia et et\nvoluptatem consequatur ut\nipsa est quae inventore\nmolestias id",
    email: "jane.smith@example.com",
    name: "Jane Smith",
    postId: 3
  },
  {
    body: "doloremque aut dolores quidem\nfugiat qui nulla\nquasi asperiores molestiae\nreiciendis culpa",
    email: "alex.brown@example.com",
    name: "Alex Brown",
    postId: 4
  },
  {
    body: "perspiciatis quis doloremque\naccusantium harum saepe\nnatus repellendus\nvoluptas officiis",
    email: "emma.wilson@example.com",
    name: "Emma Wilson",
    postId: 5
  },
  {
  body: "ut voluptatem quisquam\nexpedita velit consequatur\npariatur occaecati facilis\nsuscipit dignissimos",
  email: "olivia.martin@example.com",
  name: "Olivia Martin",
  postId: 6
},
{
  body: "repellendus eos tempora\nrerum molestias doloremque\ninventore placeat quisquam\nvoluptates sint",
  email: "liam.johnson@example.com",
  name: "Liam Johnson",
  postId: 7
},
{
  body: "consequatur beatae\nmolestias praesentium\nipsam quasi asperiores\nodit natus",
  email: "sophia.davis@example.com",
  name: "Sophia Davis",
  postId: 8
},
{
  body: "illo repellat quis\nlaboriosam dicta\nmolestiae cumque nihil\nvoluptatibus quaerat",
  email: "noah.anderson@example.com",
  name: "Noah Anderson",
  postId: 9
},
{
  body: "earum est officiis\nmagnam aliquam\nmolestias rem dolore\nquidem voluptatem",
  email: "ava.thomas@example.com",
  name: "Ava Thomas",
  postId: 10
}
];

}