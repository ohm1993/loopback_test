? Select the model to apply the ACL entry to: (all existing models)
? Select the ACL scope: All methods and properties
? Select the access type: All (match all types)
? Select the role All users
? Select the permission to apply Explicitly deny access
macs-iMac-3:loopback-test ohm$ lb acl
? Select the model to apply the ACL entry to: project
? Select the ACL scope: A single method
? Enter the method name listProjects
? Select the role All users
? Select the permission to apply Explicitly grant access
macs-iMac-3:loopback-test ohm$ lb acl
? Select the model to apply the ACL entry to: project
? Select the ACL scope: A single method
? Enter the method name find
? Select the role other
? Enter the role name: admin
? Select the permission to apply Explicitly grant access
macs-iMac-3:loopback-test ohm$ lb acl
? Select the model to apply the ACL entry to: project
? Select the ACL scope: A single method
? Enter the method name findById
? Select the role other
? Enter the role name: teamMember
? Select the permission to apply Explicitly grant access
macs-iMac-3:loopback-test ohm$ lb acl
? Select the model to apply the ACL entry to: project
? Select the ACL scope: A single method
? Enter the method name donate
? Select the role Any authenticated user
? Select the permission to apply Explicitly grant access
macs-iMac-3:loopback-test ohm$ lb acl
? Select the model to apply the ACL entry to: project
? Select the ACL scope: A single method
? Enter the method name withdraw
? Select the role The user owning the object
? Select the permission to apply Explicitly grant access