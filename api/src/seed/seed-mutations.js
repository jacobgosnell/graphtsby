export default `mutation {
  u1: CreateUser(name: "John", email: "92fdsjf@yahoo.com") 
  { 
    id 
    name
  }
  u2: CreateUser(name: "Will", email: "pa0fds@gmail.com") 
  { 
    id 
    name
  }
  u3: CreateUser(name: "George", email: "test232fwf@yahoo.com") 
  { 
    id 
    name
  }
  u4: CreateUser(name: "Gabby", email: "garyOaks2323@gmail.com") 
  { 
    id 
    name
  }
  u5: CreateUser(name: "Stephanie", email: "pilsbury2323@yahoo.com") 
  { 
    id 
    name
  }
  u6: CreateUser(name: "Miles", email: "kalie24342@yahoo.com") 
  { 
    id 
    name
  }

  p1: CreatePet(name: "Woofy") {id}
  p2: CreatePet(name: "Sparkles") {id}
  p3: CreatePet(name: "Dog") {id}
  p4: CreatePet(name: "Max") {id}
  p5: CreatePet(name: "Titan") {id}
  p6: CreatePet(name: "Whiskers") {id}
  p7: CreatePet(name: "Perry") {id}
}`;
