
import { useState } from 'react';
import './App.css';
import Menu from './menu/Menu';

function App() {
  const [active,setActive] = useState(false)
  const items =[
    {value:"Home", href:"/main", icon:"anchor"},
    {value:"Servises", href:"/servises", icon:"api"},
    {value:"Contacts", href:"/Contacts", icon:"android"}
  ]
  return (
    <div className="App">
        <nav>
          <div          
            className={active ? "burger-btn active" : "burger-btn"}
            onClick={()=>{setActive(!active)}}>
            <span></span>
          </div>
        </nav>
        <main  className={active ? "_lock" : null}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, perspiciatis? Praesentium laboriosam, iure officiis, cum repellat omnis dolorem et voluptates asperiores at, voluptatum temporibus in fuga excepturi ipsum itaque laborum.
   Harum, facilis maxime tenetur omnis reiciendis iste id enim sint veniam adipisci libero, accusantium alias consectetur, non animi nihil tempore unde illum vero? Dolorum reiciendis nihil numquam quo, autem doloremque!
   Quis impedit consequatur enim nihil, quia quas? Veniam, nemo illum a laudantium placeat nisi suscipit atque facere cupiditate delectus unde voluptas molestias, tempore perspiciatis fuga? Natus, doloribus maxime. Quaerat, consequatur?
   Quia possimus unde obcaecati beatae quibusdam consequuntur explicabo optio nisi amet quas reiciendis pariatur in molestias hic velit officia reprehenderit sint, id, sit, deserunt aspernatur libero tempore accusamus perspiciatis? Quam!
   Hic nisi eveniet non distinctio soluta pariatur ipsa id iure enim deleniti quod inventore consequuntur sed cumque nesciunt asperiores doloribus perspiciatis, recusandae commodi quis reprehenderit. Laudantium provident quis eligendi quos?
   Fuga tempora dolores provident consequatur, sequi aliquam. Excepturi perferendis temporibus deleniti ipsum dignissimos accusamus ab consequatur debitis, odio facilis modi dolore ducimus esse, officia suscipit eligendi minus ad impedit similique.
   In quia dicta a, facilis nam cum at dolor molestias quisquam excepturi dolores ducimus unde quas numquam. Hic sed culpa recusandae soluta quasi quibusdam accusantium, quisquam nisi magni! Magnam, quae.
   Neque, harum quod corporis quo, nulla cupiditate ratione tenetur dolore animi laudantium, doloremque quos pariatur obcaecati asperiores. Est, ex! Sint nemo rem atque? Quis, corrupti ex eum id perferendis modi.
   Nihil magni assumenda placeat repellendus expedita eius et necessitatibus vitae laboriosam facilis eum voluptatum ducimus atque doloremque illum obcaecati, nostrum enim optio quis. Laudantium aperiam quaerat temporibus, accusantium adipisci libero!
   Minus harum cumque incidunt tempore ipsam maxime quasi beatae! Nisi dolor quae perspiciatis doloribus, commodi autem rerum error aliquid quidem eaque. Quam possimus cupiditate rerum, rem molestiae eligendi magni maiores.
   Error accusantium, maiores explicabo recusandae provident et? Pariatur, iste eius consequuntur velit, minus quibusdam tempora est sapiente aperiam a beatae, nostrum corporis perspiciatis! Beatae nihil iure ex, quidem quia dignissimos.
   Corporis explicabo natus saepe beatae consequatur id aliquid tempora reiciendis mollitia unde ea veritatis atque quos eveniet nulla reprehenderit enim possimus impedit tempore, sed quas temporibus quaerat! Soluta, sequi quas!
   Animi asperiores repudiandae sunt facere quam sint quasi? Consectetur ea soluta labore accusantium aliquam quas, dolor est pariatur dicta neque nostrum harum suscipit. Maxime, quis rem! Quo sunt possimus laborum!
   Temporibus iusto iure accusamus illum voluptate. Blanditiis nostrum beatae quaerat sapiente alias, error quod. Quaerat beatae ullam numquam dolor illum aliquid ad ipsum, ipsa vitae maiores, perspiciatis voluptate ipsam totam.
   Sunt facere voluptates alias sed assumenda mollitia eligendi omnis nobis voluptas molestiae. Sed nostrum accusamus, tempora ipsa necessitatibus distinctio suscipit? Ducimus excepturi ipsum ab aperiam esse sequi id nisi vitae.
   Tempore id quis quia? Officia veniam harum officiis! Impedit eligendi possimus quis nihil animi consectetur officia eum nobis, exercitationem magni ut, assumenda minus praesentium beatae porro illo, tenetur sapiente. Aliquam.
   Ducimus blanditiis minima culpa unde porro omnis vel recusandae, nihil soluta voluptatum libero dolores laudantium corporis est reprehenderit molestias amet. Molestias veniam a explicabo reprehenderit alias quibusdam quis qui ipsam!
   Iusto quas nihil assumenda dignissimos neque aperiam odit, doloribus cupiditate delectus reprehenderit fugit eos voluptatibus iure autem id? Animi dolore fugiat quos recusandae accusamus ex temporibus modi veritatis error voluptate.
   Similique facilis ab rem fugiat fuga quidem? Earum laboriosam expedita officia aut nam accusamus iure, maxime, molestias quo enim laudantium nostrum qui sapiente, dolorum sequi repellat necessitatibus perferendis. At, quasi!
          Totam aliquid rem repellendus in ducimus minus inventore ipsum possimus dolor autem eius veniam natus eligendi error voluptatum praesentium, nemo cum ipsam quia enim. Inventore aut aspernatur ducimus error facere.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, perspiciatis? Praesentium laboriosam, iure officiis, cum repellat omnis dolorem et voluptates asperiores at, voluptatum temporibus in fuga excepturi ipsum itaque laborum.
   Harum, facilis maxime tenetur omnis reiciendis iste id enim sint veniam adipisci libero, accusantium alias consectetur, non animi nihil tempore unde illum vero? Dolorum reiciendis nihil numquam quo, autem doloremque!
   Quis impedit consequatur enim nihil, quia quas? Veniam, nemo illum a laudantium placeat nisi suscipit atque facere cupiditate delectus unde voluptas molestias, tempore perspiciatis fuga? Natus, doloribus maxime. Quaerat, consequatur?
   Quia possimus unde obcaecati beatae quibusdam consequuntur explicabo optio nisi amet quas reiciendis pariatur in molestias hic velit officia reprehenderit sint, id, sit, deserunt aspernatur libero tempore accusamus perspiciatis? Quam!
   Hic nisi eveniet non distinctio soluta pariatur ipsa id iure enim deleniti quod inventore consequuntur sed cumque nesciunt asperiores doloribus perspiciatis, recusandae commodi quis reprehenderit. Laudantium provident quis eligendi quos?
   Fuga tempora dolores provident consequatur, sequi aliquam. Excepturi perferendis temporibus deleniti ipsum dignissimos accusamus ab consequatur debitis, odio facilis modi dolore ducimus esse, officia suscipit eligendi minus ad impedit similique.
   In quia dicta a, facilis nam cum at dolor molestias quisquam excepturi dolores ducimus unde quas numquam. Hic sed culpa recusandae soluta quasi quibusdam accusantium, quisquam nisi magni! Magnam, quae.
   Neque, harum quod corporis quo, nulla cupiditate ratione tenetur dolore animi laudantium, doloremque quos pariatur obcaecati asperiores. Est, ex! Sint nemo rem atque? Quis, corrupti ex eum id perferendis modi.
   Nihil magni assumenda placeat repellendus expedita eius et necessitatibus vitae laboriosam facilis eum voluptatum ducimus atque doloremque illum obcaecati, nostrum enim optio quis. Laudantium aperiam quaerat temporibus, accusantium adipisci libero!
   Minus harum cumque incidunt tempore ipsam maxime quasi beatae! Nisi dolor quae perspiciatis doloribus, commodi autem rerum error aliquid quidem eaque. Quam possimus cupiditate rerum, rem molestiae eligendi magni maiores.
   Error accusantium, maiores explicabo recusandae provident et? Pariatur, iste eius consequuntur velit, minus quibusdam tempora est sapiente aperiam a beatae, nostrum corporis perspiciatis! Beatae nihil iure ex, quidem quia dignissimos.
   Corporis explicabo natus saepe beatae consequatur id aliquid tempora reiciendis mollitia unde ea veritatis atque quos eveniet nulla reprehenderit enim possimus impedit tempore, sed quas temporibus quaerat! Soluta, sequi quas!
   Animi asperiores repudiandae sunt facere quam sint quasi? Consectetur ea soluta labore accusantium aliquam quas, dolor est pariatur dicta neque nostrum harum suscipit. Maxime, quis rem! Quo sunt possimus laborum!
   Temporibus iusto iure accusamus illum voluptate. Blanditiis nostrum beatae quaerat sapiente alias, error quod. Quaerat beatae ullam numquam dolor illum aliquid ad ipsum, ipsa vitae maiores, perspiciatis voluptate ipsam totam.
   Sunt facere voluptates alias sed assumenda mollitia eligendi omnis nobis voluptas molestiae. Sed nostrum accusamus, tempora ipsa necessitatibus distinctio suscipit? Ducimus excepturi ipsum ab aperiam esse sequi id nisi vitae.
   Tempore id quis quia? Officia veniam harum officiis! Impedit eligendi possimus quis nihil animi consectetur officia eum nobis, exercitationem magni ut, assumenda minus praesentium beatae porro illo, tenetur sapiente. Aliquam.
   Ducimus blanditiis minima culpa unde porro omnis vel recusandae, nihil soluta voluptatum libero dolores laudantium corporis est reprehenderit molestias amet. Molestias veniam a explicabo reprehenderit alias quibusdam quis qui ipsam!
   Iusto quas nihil assumenda dignissimos neque aperiam odit, doloribus cupiditate delectus reprehenderit fugit eos voluptatibus iure autem id? Animi dolore fugiat quos recusandae accusamus ex temporibus modi veritatis error voluptate.
   Similique facilis ab rem fugiat fuga quidem? Earum laboriosam expedita officia aut nam accusamus iure, maxime, molestias quo enim laudantium nostrum qui sapiente, dolorum sequi repellat necessitatibus perferendis. At, quasi!
          Totam aliquid rem repellendus in ducimus minus inventore ipsum possimus dolor autem eius veniam natus eligendi error voluptatum praesentium, nemo cum ipsam quia enim. Inventore aut aspernatur ducimus error facere.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, perspiciatis? Praesentium laboriosam, iure officiis, cum repellat omnis dolorem et voluptates asperiores at, voluptatum temporibus in fuga excepturi ipsum itaque laborum.
   Harum, facilis maxime tenetur omnis reiciendis iste id enim sint veniam adipisci libero, accusantium alias consectetur, non animi nihil tempore unde illum vero? Dolorum reiciendis nihil numquam quo, autem doloremque!
   Quis impedit consequatur enim nihil, quia quas? Veniam, nemo illum a laudantium placeat nisi suscipit atque facere cupiditate delectus unde voluptas molestias, tempore perspiciatis fuga? Natus, doloribus maxime. Quaerat, consequatur?
   Quia possimus unde obcaecati beatae quibusdam consequuntur explicabo optio nisi amet quas reiciendis pariatur in molestias hic velit officia reprehenderit sint, id, sit, deserunt aspernatur libero tempore accusamus perspiciatis? Quam!
   Hic nisi eveniet non distinctio soluta pariatur ipsa id iure enim deleniti quod inventore consequuntur sed cumque nesciunt asperiores doloribus perspiciatis, recusandae commodi quis reprehenderit. Laudantium provident quis eligendi quos?
   Fuga tempora dolores provident consequatur, sequi aliquam. Excepturi perferendis temporibus deleniti ipsum dignissimos accusamus ab consequatur debitis, odio facilis modi dolore ducimus esse, officia suscipit eligendi minus ad impedit similique.
   In quia dicta a, facilis nam cum at dolor molestias quisquam excepturi dolores ducimus unde quas numquam. Hic sed culpa recusandae soluta quasi quibusdam accusantium, quisquam nisi magni! Magnam, quae.
   Neque, harum quod corporis quo, nulla cupiditate ratione tenetur dolore animi laudantium, doloremque quos pariatur obcaecati asperiores. Est, ex! Sint nemo rem atque? Quis, corrupti ex eum id perferendis modi.
   Nihil magni assumenda placeat repellendus expedita eius et necessitatibus vitae laboriosam facilis eum voluptatum ducimus atque doloremque illum obcaecati, nostrum enim optio quis. Laudantium aperiam quaerat temporibus, accusantium adipisci libero!
   Minus harum cumque incidunt tempore ipsam maxime quasi beatae! Nisi dolor quae perspiciatis doloribus, commodi autem rerum error aliquid quidem eaque. Quam possimus cupiditate rerum, rem molestiae eligendi magni maiores.
   Error accusantium, maiores explicabo recusandae provident et? Pariatur, iste eius consequuntur velit, minus quibusdam tempora est sapiente aperiam a beatae, nostrum corporis perspiciatis! Beatae nihil iure ex, quidem quia dignissimos.
   Corporis explicabo natus saepe beatae consequatur id aliquid tempora reiciendis mollitia unde ea veritatis atque quos eveniet nulla reprehenderit enim possimus impedit tempore, sed quas temporibus quaerat! Soluta, sequi quas!
   Animi asperiores repudiandae sunt facere quam sint quasi? Consectetur ea soluta labore accusantium aliquam quas, dolor est pariatur dicta neque nostrum harum suscipit. Maxime, quis rem! Quo sunt possimus laborum!
   Temporibus iusto iure accusamus illum voluptate. Blanditiis nostrum beatae quaerat sapiente alias, error quod. Quaerat beatae ullam numquam dolor illum aliquid ad ipsum, ipsa vitae maiores, perspiciatis voluptate ipsam totam.
   Sunt facere voluptates alias sed assumenda mollitia eligendi omnis nobis voluptas molestiae. Sed nostrum accusamus, tempora ipsa necessitatibus distinctio suscipit? Ducimus excepturi ipsum ab aperiam esse sequi id nisi vitae.
   Tempore id quis quia? Officia veniam harum officiis! Impedit eligendi possimus quis nihil animi consectetur officia eum nobis, exercitationem magni ut, assumenda minus praesentium beatae porro illo, tenetur sapiente. Aliquam.
   Ducimus blanditiis minima culpa unde porro omnis vel recusandae, nihil soluta voluptatum libero dolores laudantium corporis est reprehenderit molestias amet. Molestias veniam a explicabo reprehenderit alias quibusdam quis qui ipsam!
   Iusto quas nihil assumenda dignissimos neque aperiam odit, doloribus cupiditate delectus reprehenderit fugit eos voluptatibus iure autem id? Animi dolore fugiat quos recusandae accusamus ex temporibus modi veritatis error voluptate.
   Similique facilis ab rem fugiat fuga quidem? Earum laboriosam expedita officia aut nam accusamus iure, maxime, molestias quo enim laudantium nostrum qui sapiente, dolorum sequi repellat necessitatibus perferendis. At, quasi!
          Totam aliquid rem repellendus in ducimus minus inventore ipsum possimus dolor autem eius veniam natus eligendi error voluptatum praesentium, nemo cum ipsam quia enim. Inventore aut aspernatur ducimus error facere.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, perspiciatis? Praesentium laboriosam, iure officiis, cum repellat omnis dolorem et voluptates asperiores at, voluptatum temporibus in fuga excepturi ipsum itaque laborum.
   Harum, facilis maxime tenetur omnis reiciendis iste id enim sint veniam adipisci libero, accusantium alias consectetur, non animi nihil tempore unde illum vero? Dolorum reiciendis nihil numquam quo, autem doloremque!
   Quis impedit consequatur enim nihil, quia quas? Veniam, nemo illum a laudantium placeat nisi suscipit atque facere cupiditate delectus unde voluptas molestias, tempore perspiciatis fuga? Natus, doloribus maxime. Quaerat, consequatur?
   Quia possimus unde obcaecati beatae quibusdam consequuntur explicabo optio nisi amet quas reiciendis pariatur in molestias hic velit officia reprehenderit sint, id, sit, deserunt aspernatur libero tempore accusamus perspiciatis? Quam!
   Hic nisi eveniet non distinctio soluta pariatur ipsa id iure enim deleniti quod inventore consequuntur sed cumque nesciunt asperiores doloribus perspiciatis, recusandae commodi quis reprehenderit. Laudantium provident quis eligendi quos?
   Fuga tempora dolores provident consequatur, sequi aliquam. Excepturi perferendis temporibus deleniti ipsum dignissimos accusamus ab consequatur debitis, odio facilis modi dolore ducimus esse, officia suscipit eligendi minus ad impedit similique.
   In quia dicta a, facilis nam cum at dolor molestias quisquam excepturi dolores ducimus unde quas numquam. Hic sed culpa recusandae soluta quasi quibusdam accusantium, quisquam nisi magni! Magnam, quae.
   Neque, harum quod corporis quo, nulla cupiditate ratione tenetur dolore animi laudantium, doloremque quos pariatur obcaecati asperiores. Est, ex! Sint nemo rem atque? Quis, corrupti ex eum id perferendis modi.
   Nihil magni assumenda placeat repellendus expedita eius et necessitatibus vitae laboriosam facilis eum voluptatum ducimus atque doloremque illum obcaecati, nostrum enim optio quis. Laudantium aperiam quaerat temporibus, accusantium adipisci libero!
   Minus harum cumque incidunt tempore ipsam maxime quasi beatae! Nisi dolor quae perspiciatis doloribus, commodi autem rerum error aliquid quidem eaque. Quam possimus cupiditate rerum, rem molestiae eligendi magni maiores.
   Error accusantium, maiores explicabo recusandae provident et? Pariatur, iste eius consequuntur velit, minus quibusdam tempora est sapiente aperiam a beatae, nostrum corporis perspiciatis! Beatae nihil iure ex, quidem quia dignissimos.
   Corporis explicabo natus saepe beatae consequatur id aliquid tempora reiciendis mollitia unde ea veritatis atque quos eveniet nulla reprehenderit enim possimus impedit tempore, sed quas temporibus quaerat! Soluta, sequi quas!
   Animi asperiores repudiandae sunt facere quam sint quasi? Consectetur ea soluta labore accusantium aliquam quas, dolor est pariatur dicta neque nostrum harum suscipit. Maxime, quis rem! Quo sunt possimus laborum!
   Temporibus iusto iure accusamus illum voluptate. Blanditiis nostrum beatae quaerat sapiente alias, error quod. Quaerat beatae ullam numquam dolor illum aliquid ad ipsum, ipsa vitae maiores, perspiciatis voluptate ipsam totam.
   Sunt facere voluptates alias sed assumenda mollitia eligendi omnis nobis voluptas molestiae. Sed nostrum accusamus, tempora ipsa necessitatibus distinctio suscipit? Ducimus excepturi ipsum ab aperiam esse sequi id nisi vitae.
   Tempore id quis quia? Officia veniam harum officiis! Impedit eligendi possimus quis nihil animi consectetur officia eum nobis, exercitationem magni ut, assumenda minus praesentium beatae porro illo, tenetur sapiente. Aliquam.
   Ducimus blanditiis minima culpa unde porro omnis vel recusandae, nihil soluta voluptatum libero dolores laudantium corporis est reprehenderit molestias amet. Molestias veniam a explicabo reprehenderit alias quibusdam quis qui ipsam!
   Iusto quas nihil assumenda dignissimos neque aperiam odit, doloribus cupiditate delectus reprehenderit fugit eos voluptatibus iure autem id? Animi dolore fugiat quos recusandae accusamus ex temporibus modi veritatis error voluptate.
   Similique facilis ab rem fugiat fuga quidem? Earum laboriosam expedita officia aut nam accusamus iure, maxime, molestias quo enim laudantium nostrum qui sapiente, dolorum sequi repellat necessitatibus perferendis. At, quasi!
          Totam aliquid rem repellendus in ducimus minus inventore ipsum possimus dolor autem eius veniam natus eligendi error voluptatum praesentium, nemo cum ipsam quia enim. Inventore aut aspernatur ducimus error facere.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, perspiciatis? Praesentium laboriosam, iure officiis, cum repellat omnis dolorem et voluptates asperiores at, voluptatum temporibus in fuga excepturi ipsum itaque laborum.
   Harum, facilis maxime tenetur omnis reiciendis iste id enim sint veniam adipisci libero, accusantium alias consectetur, non animi nihil tempore unde illum vero? Dolorum reiciendis nihil numquam quo, autem doloremque!
   Quis impedit consequatur enim nihil, quia quas? Veniam, nemo illum a laudantium placeat nisi suscipit atque facere cupiditate delectus unde voluptas molestias, tempore perspiciatis fuga? Natus, doloribus maxime. Quaerat, consequatur?
   Quia possimus unde obcaecati beatae quibusdam consequuntur explicabo optio nisi amet quas reiciendis pariatur in molestias hic velit officia reprehenderit sint, id, sit, deserunt aspernatur libero tempore accusamus perspiciatis? Quam!
   Hic nisi eveniet non distinctio soluta pariatur ipsa id iure enim deleniti quod inventore consequuntur sed cumque nesciunt asperiores doloribus perspiciatis, recusandae commodi quis reprehenderit. Laudantium provident quis eligendi quos?
   Fuga tempora dolores provident consequatur, sequi aliquam. Excepturi perferendis temporibus deleniti ipsum dignissimos accusamus ab consequatur debitis, odio facilis modi dolore ducimus esse, officia suscipit eligendi minus ad impedit similique.
   In quia dicta a, facilis nam cum at dolor molestias quisquam excepturi dolores ducimus unde quas numquam. Hic sed culpa recusandae soluta quasi quibusdam accusantium, quisquam nisi magni! Magnam, quae.
   Neque, harum quod corporis quo, nulla cupiditate ratione tenetur dolore animi laudantium, doloremque quos pariatur obcaecati asperiores. Est, ex! Sint nemo rem atque? Quis, corrupti ex eum id perferendis modi.
   Nihil magni assumenda placeat repellendus expedita eius et necessitatibus vitae laboriosam facilis eum voluptatum ducimus atque doloremque illum obcaecati, nostrum enim optio quis. Laudantium aperiam quaerat temporibus, accusantium adipisci libero!
   Minus harum cumque incidunt tempore ipsam maxime quasi beatae! Nisi dolor quae perspiciatis doloribus, commodi autem rerum error aliquid quidem eaque. Quam possimus cupiditate rerum, rem molestiae eligendi magni maiores.
   Error accusantium, maiores explicabo recusandae provident et? Pariatur, iste eius consequuntur velit, minus quibusdam tempora est sapiente aperiam a beatae, nostrum corporis perspiciatis! Beatae nihil iure ex, quidem quia dignissimos.
   Corporis explicabo natus saepe beatae consequatur id aliquid tempora reiciendis mollitia unde ea veritatis atque quos eveniet nulla reprehenderit enim possimus impedit tempore, sed quas temporibus quaerat! Soluta, sequi quas!
   Animi asperiores repudiandae sunt facere quam sint quasi? Consectetur ea soluta labore accusantium aliquam quas, dolor est pariatur dicta neque nostrum harum suscipit. Maxime, quis rem! Quo sunt possimus laborum!
   Temporibus iusto iure accusamus illum voluptate. Blanditiis nostrum beatae quaerat sapiente alias, error quod. Quaerat beatae ullam numquam dolor illum aliquid ad ipsum, ipsa vitae maiores, perspiciatis voluptate ipsam totam.
   Sunt facere voluptates alias sed assumenda mollitia eligendi omnis nobis voluptas molestiae. Sed nostrum accusamus, tempora ipsa necessitatibus distinctio suscipit? Ducimus excepturi ipsum ab aperiam esse sequi id nisi vitae.
   Tempore id quis quia? Officia veniam harum officiis! Impedit eligendi possimus quis nihil animi consectetur officia eum nobis, exercitationem magni ut, assumenda minus praesentium beatae porro illo, tenetur sapiente. Aliquam.
   Ducimus blanditiis minima culpa unde porro omnis vel recusandae, nihil soluta voluptatum libero dolores laudantium corporis est reprehenderit molestias amet. Molestias veniam a explicabo reprehenderit alias quibusdam quis qui ipsam!
   Iusto quas nihil assumenda dignissimos neque aperiam odit, doloribus cupiditate delectus reprehenderit fugit eos voluptatibus iure autem id? Animi dolore fugiat quos recusandae accusamus ex temporibus modi veritatis error voluptate.
   Similique facilis ab rem fugiat fuga quidem? Earum laboriosam expedita officia aut nam accusamus iure, maxime, molestias quo enim laudantium nostrum qui sapiente, dolorum sequi repellat necessitatibus perferendis. At, quasi!
          Totam aliquid rem repellendus in ducimus minus inventore ipsum possimus dolor autem eius veniam natus eligendi error voluptatum praesentium, nemo cum ipsam quia enim. Inventore aut aspernatur ducimus error facere.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, perspiciatis? Praesentium laboriosam, iure officiis, cum repellat omnis dolorem et voluptates asperiores at, voluptatum temporibus in fuga excepturi ipsum itaque laborum.
   Harum, facilis maxime tenetur omnis reiciendis iste id enim sint veniam adipisci libero, accusantium alias consectetur, non animi nihil tempore unde illum vero? Dolorum reiciendis nihil numquam quo, autem doloremque!
   Quis impedit consequatur enim nihil, quia quas? Veniam, nemo illum a laudantium placeat nisi suscipit atque facere cupiditate delectus unde voluptas molestias, tempore perspiciatis fuga? Natus, doloribus maxime. Quaerat, consequatur?
   Quia possimus unde obcaecati beatae quibusdam consequuntur explicabo optio nisi amet quas reiciendis pariatur in molestias hic velit officia reprehenderit sint, id, sit, deserunt aspernatur libero tempore accusamus perspiciatis? Quam!
   Hic nisi eveniet non distinctio soluta pariatur ipsa id iure enim deleniti quod inventore consequuntur sed cumque nesciunt asperiores doloribus perspiciatis, recusandae commodi quis reprehenderit. Laudantium provident quis eligendi quos?
   Fuga tempora dolores provident consequatur, sequi aliquam. Excepturi perferendis temporibus deleniti ipsum dignissimos accusamus ab consequatur debitis, odio facilis modi dolore ducimus esse, officia suscipit eligendi minus ad impedit similique.
   In quia dicta a, facilis nam cum at dolor molestias quisquam excepturi dolores ducimus unde quas numquam. Hic sed culpa recusandae soluta quasi quibusdam accusantium, quisquam nisi magni! Magnam, quae.
   Neque, harum quod corporis quo, nulla cupiditate ratione tenetur dolore animi laudantium, doloremque quos pariatur obcaecati asperiores. Est, ex! Sint nemo rem atque? Quis, corrupti ex eum id perferendis modi.
   Nihil magni assumenda placeat repellendus expedita eius et necessitatibus vitae laboriosam facilis eum voluptatum ducimus atque doloremque illum obcaecati, nostrum enim optio quis. Laudantium aperiam quaerat temporibus, accusantium adipisci libero!
   Minus harum cumque incidunt tempore ipsam maxime quasi beatae! Nisi dolor quae perspiciatis doloribus, commodi autem rerum error aliquid quidem eaque. Quam possimus cupiditate rerum, rem molestiae eligendi magni maiores.
   Error accusantium, maiores explicabo recusandae provident et? Pariatur, iste eius consequuntur velit, minus quibusdam tempora est sapiente aperiam a beatae, nostrum corporis perspiciatis! Beatae nihil iure ex, quidem quia dignissimos.
   Corporis explicabo natus saepe beatae consequatur id aliquid tempora reiciendis mollitia unde ea veritatis atque quos eveniet nulla reprehenderit enim possimus impedit tempore, sed quas temporibus quaerat! Soluta, sequi quas!
   Animi asperiores repudiandae sunt facere quam sint quasi? Consectetur ea soluta labore accusantium aliquam quas, dolor est pariatur dicta neque nostrum harum suscipit. Maxime, quis rem! Quo sunt possimus laborum!
   Temporibus iusto iure accusamus illum voluptate. Blanditiis nostrum beatae quaerat sapiente alias, error quod. Quaerat beatae ullam numquam dolor illum aliquid ad ipsum, ipsa vitae maiores, perspiciatis voluptate ipsam totam.
   Sunt facere voluptates alias sed assumenda mollitia eligendi omnis nobis voluptas molestiae. Sed nostrum accusamus, tempora ipsa necessitatibus distinctio suscipit? Ducimus excepturi ipsum ab aperiam esse sequi id nisi vitae.
   Tempore id quis quia? Officia veniam harum officiis! Impedit eligendi possimus quis nihil animi consectetur officia eum nobis, exercitationem magni ut, assumenda minus praesentium beatae porro illo, tenetur sapiente. Aliquam.
   Ducimus blanditiis minima culpa unde porro omnis vel recusandae, nihil soluta voluptatum libero dolores laudantium corporis est reprehenderit molestias amet. Molestias veniam a explicabo reprehenderit alias quibusdam quis qui ipsam!
   Iusto quas nihil assumenda dignissimos neque aperiam odit, doloribus cupiditate delectus reprehenderit fugit eos voluptatibus iure autem id? Animi dolore fugiat quos recusandae accusamus ex temporibus modi veritatis error voluptate.
   Similique facilis ab rem fugiat fuga quidem? Earum laboriosam expedita officia aut nam accusamus iure, maxime, molestias quo enim laudantium nostrum qui sapiente, dolorum sequi repellat necessitatibus perferendis. At, quasi!
          Totam aliquid rem repellendus in ducimus minus inventore ipsum possimus dolor autem eius veniam natus eligendi error voluptatum praesentium, nemo cum ipsam quia enim. Inventore aut aspernatur ducimus error facere.</p>
        </main>
        <Menu active={active} setActive={setActive} header="Burger menu" items={items}/>
    </div>
  );
}

export default App;
