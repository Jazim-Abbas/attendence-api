# Attendence Biometric REST Api

## Modules

- apply-leave
- department
- holliday-allortment
- job-title
- leave-category
- shift
- staff
- attendence

---

## Job Title

### Routes Info

- /job-title: get
- /job-title/:id: get
- /job-title: post
- /job-title/:id: patch
- /job-title/:id: delete

### Req Body Info

- **/job-title** (post):

```js
{
  jobTitle*: string;
  allowedLeaves*: number;
}
```

- **/job-title/:id** (patch):

```js
{
  jobTitle: string;
  allowedLeaves: number;
}
```

---

## Department

### Routes Info

- /department: get
- /department/:id: get
- /department: post
- /department/:id: patch
- /department/:id: delete

### Req Body Info

- **/department** (post):

```js
{
  name*: string;
  phone*: number;
  email*: string;
  address*: string;
}
```

- **/department/:id** (patch):

```js
{
  name: string;
  phone: number;
  email: string;
  address: string;
}
```

---

## Leave Category

### Routes Info

- /leave-category: get
- /leave-category/:id: get
- /leave-category: post
- /leave-category/:id: patch
- /leave-category/:id: delete

### Req Body Info

- **/leave-category** (post):

```js
{
  name*: string;
}
```

- **/leave-category/:id** (patch):

```js
{
  name: string;
}
```

---
