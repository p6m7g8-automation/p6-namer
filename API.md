# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### P6Namer <a name="P6Namer" id="p6-namer.P6Namer"></a>

#### Initializers <a name="Initializers" id="p6-namer.P6Namer.Initializer"></a>

```typescript
import { P6Namer } from 'p6-namer'

new P6Namer(scope: Construct, id: string, props: IP6NamerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#p6-namer.P6Namer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#p6-namer.P6Namer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#p6-namer.P6Namer.Initializer.parameter.props">props</a></code> | <code><a href="#p6-namer.IP6NamerProps">IP6NamerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="p6-namer.P6Namer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="p6-namer.P6Namer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="p6-namer.P6Namer.Initializer.parameter.props"></a>

- *Type:* <a href="#p6-namer.IP6NamerProps">IP6NamerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#p6-namer.P6Namer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#p6-namer.P6Namer.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="p6-namer.P6Namer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="p6-namer.P6Namer.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops being managed by CloudFormation, either because you've removed it from the CDK application or because you've made a change that requires the resource to be replaced.  The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="p6-namer.P6Namer.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#p6-namer.P6Namer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#p6-namer.P6Namer.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="p6-namer.P6Namer.isConstruct"></a>

```typescript
import { P6Namer } from 'p6-namer'

P6Namer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="p6-namer.P6Namer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="p6-namer.P6Namer.isResource"></a>

```typescript
import { P6Namer } from 'p6-namer'

P6Namer.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="p6-namer.P6Namer.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#p6-namer.P6Namer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#p6-namer.P6Namer.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#p6-namer.P6Namer.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="p6-namer.P6Namer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="p6-namer.P6Namer.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK (generally, those created by creating new class instances like Role, Bucket, etc.), this is always the same as the environment of the stack they belong to; however, for imported resources (those obtained from static methods like fromRoleArn, fromBucketName, etc.), that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="p6-namer.P6Namer.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IP6NamerProps <a name="IP6NamerProps" id="p6-namer.IP6NamerProps"></a>

- *Implemented By:* <a href="#p6-namer.IP6NamerProps">IP6NamerProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#p6-namer.IP6NamerProps.property.accountAlias">accountAlias</a></code> | <code>string</code> | *No description.* |

---

##### `accountAlias`<sup>Required</sup> <a name="accountAlias" id="p6-namer.IP6NamerProps.property.accountAlias"></a>

```typescript
public readonly accountAlias: string;
```

- *Type:* string

---

